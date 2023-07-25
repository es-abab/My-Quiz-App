import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
const navigate = useNavigate();

  const handleSignin = () => {
    navigate('/home')
  }
  return (
    <div>
      <button className='bg-slate-900 text-white font-bold' onClick={handleSignin}>Signin</button>
    </div>
  )
}

export default LoginPage