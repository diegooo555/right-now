import { Link } from 'react-router-dom'
import React from 'react'

const BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

const LinkGoogle = ({user}) => {
  return (
    <Link to={user ? "/" : `${BACKEND_URL}/oauth2/authorization/google`} className='flex gap-2 border border-gray-200 px-6 py-3 rounded-md'>
      <img src="/google.png" alt="" className='w-6 h-6'/>
      <span>{user ? user.name : "Iniciar Sesión"}</span>
    </Link>
  )
}

export default LinkGoogle