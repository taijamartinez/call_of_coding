import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload as JwtDecodedPayload } from 'jsonwebtoken';

interface JwtPayload extends JwtDecodedPayload {
  username: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  // Extract token from "Authorization: Bearer token" header
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ status: 'error', message: "Access denied. No token provided." });
  }

  try {
    // Check if JWT_SECRET is available in the environment variables
    const secret = process.env.JWT_SECRET as string;
    if (!secret) {
      return res.status(500).json({ status: 'error', message: "Server error. JWT secret is not defined." });
    }

    // Decode and verify the token
    const decoded = jwt.verify(token, secret) as JwtPayload; // Casting to JwtPayload

    // Attach the decoded user data to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log the error for debugging purposes (remove or modify this in production)
    console.error("JWT verification error:", error);

    // Handling different types of JWT errors
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({ status: 'error', message: "Token has expired." });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ status: 'error', message: "Invalid token." });
    }
    return res.status(500).json({ status: 'error', message: "An error occurred while verifying the token." });
  }
};
