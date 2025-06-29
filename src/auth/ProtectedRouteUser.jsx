import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/useUsercontext.js";

const ProtectedRouteUser = () => {
  const { user, loading } = useUserContext();

  if(loading){
    return <div>Cargando...</div>
  }

  if (user?.roles?.some(role => role === "ROLE_USER")) {
    return <Outlet />;
  }
  
  return <Navigate to="/register" />;
};

export default ProtectedRouteUser;
