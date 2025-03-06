import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // Decode and return the token if available
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // returns a value that indicates if the user is logged in or if the token is expired
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);
       // Assume expired if there's no expiration
      if (!decoded.exp) return true;
      // Convert to milliseconds
      return decoded.exp * 1000 < Date.now(); 
    } catch (error) {
      // Invalid token means expired
      return true; 
    }
  }

  getToken(): string | null {
    // Retrieves token from localStorage
    return localStorage.getItem('token');
  }

  login(idToken: string) {
    // Store token in localStorage
    localStorage.setItem('token', idToken);
    // Redirect to dashboard
    window.location.href = '/dashboard';
  }

  logout() {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    window.location.href = '/login';
  }
}

export default new AuthService();
