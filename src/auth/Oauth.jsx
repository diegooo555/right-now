// Ejemplo usando React + React Router
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OAuth2RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const isNewUser = params.get('isNewUser') === 'true';

    if (token) {
      localStorage.setItem('alfretyuiopwerqazxcnosrew', token);

      if (isNewUser) {
        navigate('/register');
      } else {
        navigate('/'); // o donde quieras
      }
    }
  }, [location, navigate]);

  return <div>Autenticando...</div>;
}