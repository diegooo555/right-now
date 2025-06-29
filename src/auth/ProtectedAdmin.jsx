import React from 'react'
import { useUserContext } from '../context/useUsercontext'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin = () => {

    const { user, loading } = useUserContext();

    if(loading){
        return <div>Cargando...</div>
    }


    if (user?.roles?.some(role => role === "ROLE_ADMIN")) {
        return <Outlet/>;
    }
      
    return <Navigate to="/"/>;
}

export default ProtectedAdmin