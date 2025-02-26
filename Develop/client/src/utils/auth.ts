import { JwtPayload, jwtDecode } from 'jwt-decode';
  // TODO: return the decoded token
class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwt_decode<JwtPayload>(token) :null;
    }
 // TODO: return a value that indicates if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
     }
  // TODO: return a value that indicates if the token is expired
  isTokenExpired(token: string) {
  try{
    const decoded: JwtPayload = jwt_decode(token);
    if (decoded.exp && decoded.exp <Date.now()/1000){
      | return true;
    }
  }  catch (err){
    return false;
  }
  } 
  }
  // TODO: return the token
  getToken(): string {
  const loggedUser = localStorage.getItem(`id_token`) || "";
  return loggedUser;
  }
  // TODO: set the token to localStorage
    // TODO: redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
// TODO: remove the token from localStorage
    // TODO: redirect to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');  
  }
}

export default new AuthService();
