import React from "react";
import { Link } from "react-router";

const ButtonLoginGoogle = () => {


  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <button onClick={handleGoogleLogin}>
      <img src="/google.png" alt="" className="mr-2 h-8 w-8" />
      Iniciar sesión con Google
    </button>
  );
};

export default ButtonLoginGoogle;
