import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/useUsercontext.js";

const ProtectedRouteVisitor = () => {
  const { user, loading } = useUserContext();
  if(loading){
    return <div>Cargando...</div>
  }



  return <Navigate to="/" />;
};

export default ProtectedRouteVisitor;
