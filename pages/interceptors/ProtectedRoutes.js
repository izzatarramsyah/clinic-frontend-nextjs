// serivces
import { userService } from "../../services/UserServices.js";   

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, pathname, children }) => {
  
  const isAuthenticated = userService.userValue == null ? false : true;
  
  let unprotectedRoutes = [
    '/auth/Login',
    '/auth/Register'
  ];

  let pathIsProtected = unprotectedRoutes.indexOf(pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push('/auth/Login');
  }

  if (isBrowser() && isAuthenticated && !pathIsProtected) {
    router.push('/admin/DataPatient');
  }
  
  return children;

};

export default ProtectedRoute;