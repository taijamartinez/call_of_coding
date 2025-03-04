import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true; // If no expiration, assume expired
      return decoded.exp * 1000 < Date.now(); // Compare expiration to current time
    } catch (error) {
      return true; // Invalid token = expired
    }
  }

  getToken(): string | null {
    // TODO: return the token
    return localStorage.getItem('token');
  }

  // login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  // }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
