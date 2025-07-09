import { Link } from 'react-router-dom'
import React from 'react'

const BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

const LinkGoogle = ({user}) => {
  return (
    <Link to={user ? "/" : `${BACKEND_URL}/oauth2/authorization/google`} className='flex gap-2 border border-gray-200 lg:px-6 px-2 py-3 rounded-md bg-amber-400'>
      <img src={user ? user.picture : '/google.png' } alt="" className='w-6 h-6 rounded-[100%]' referrerPolicy="no-referrer"/>
      <span className='text-white font-bold'>{user ? user.given_name : "Iniciar Sesión"}</span>
    </Link>
  )
}

export default LinkGoogle