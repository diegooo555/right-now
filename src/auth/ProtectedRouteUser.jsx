import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/useUsercontext.js";

const ProtectedRouteUser = () => {
  const { user, loading } = useUserContext();

  if(loading){
    return <div>Cargando...</div>
  }

  if (!user?.roles?.some(role => role === "ROLE_USER")) {
    console.log("redirecionando a register")
    return <Navigate to="/register" />;
  }
  
  return user ? <Outlet/> : <Navigate to="/login" />;
};

export default ProtectedRouteUser;
