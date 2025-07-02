import UserContext from "./user.js";
import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { refreshAccesToken } from "../api/user.js"; 
import { toast, ToastContainer } from "react-toastify";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupUserAndRefresh = async () => {
      const token = localStorage.getItem('alfretyuiopwerqazxcnosrew');
      if (!token) {
        setLoading(false);
        toast.success("Inicia sesión para continuar");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        const timeLeft = decoded.exp - now;

        if (timeLeft <= 0) {
          // Token ya expiró, intenta refrescar
          const response = await refreshAccesToken();
          const newToken = response?.data?.token;
          localStorage.setItem('alfretyuiopwerqazxcnosrew', newToken);
          const newUser = jwtDecode(newToken);
          setUser(newUser);
          scheduleTokenRefresh(newUser.exp);
        } else {
          setUser(decoded);
          scheduleTokenRefresh(decoded.exp);
        }
      } catch (error) {
        console.error("Error al manejar el token:", error);
        localStorage.removeItem('alfretyuiopwerqazxcnosrew');
        setUser(null);
      }

      setLoading(false);
    };

    const scheduleTokenRefresh = (exp) => {
      const now = Date.now() / 1000;
      const timeUntilRefresh = (exp - now - 30) * 1000; // refrescar 30s antes de expirar
      if (timeUntilRefresh > 0) {
        setTimeout(async () => {
          try {
            const response = await refreshAccesToken();
            const newToken = response.data.token;
            localStorage.setItem('alfretyuiopwerqazxcnosrew', newToken);
            const newUser = jwtDecode(newToken);
            setUser(newUser);
            scheduleTokenRefresh(newUser.exp); // reprogramar el siguiente refresh
          } catch (err) {
            console.error("Error al refrescar token:", err);
            setUser(null);
            localStorage.removeItem('alfretyuiopwerqazxcnosrew');
          }
        }, timeUntilRefresh);
      }
    };

    setupUserAndRefresh();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />  
    </UserContext.Provider>
  );
};
