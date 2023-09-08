import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ContainerAuth from '../components/Layout/ContainerAuth'
import { axiosMusic } from '../Utils/axios.Config';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = Object.fromEntries( new FormData(e.target))    
    axiosMusic
    .post("/api/auth/register", data)
    .then(({data}) => {
      alert("Usuario creado correctamente, ahora inicia sesión con tu correo y contraseña")      
      navigate("/auth/login")
    })
    .catch((err)=> console.log(err))
  };

  return (
    <ContainerAuth>
      <header className='hidden sm:block sm:max-w-[350px] '>
        <img src="/imgs/register.png" alt="" />
      </header>
      <form
      onSubmit={handleSubmit}
      className='grid gap-6 w-[min(100%,_350px)] sm:w-[300px] '
      action="">
        <h2 className='uppercase font-semibold text-2xl '>Cuenta nueva</h2>
        <div className='grid gap-4'>
          <label
          className='text-white/50'
          htmlFor="email">Correo:</label>
          <input
          className='bg-transparent outline-none border-b border-yellow-border p-1 '
          id='email' 
          type="email" 
          name='email' 
          required />
        </div>
        <div className='grid gap-4'>
          <label
          className='text-white/50'
          htmlFor="name">Nombre de Usuario:</label>
          <input
          className='bg-transparent outline-none border-b border-yellow-border p-1 '
          id='name' 
          type="text" 
          name='name' 
          required />
        </div>
        <div className='grid gap-4'>
          <label
          className='text-white/50'
          htmlFor="password">Contraseña:</label>
          <input
          className='bg-transparent outline-none border-b border-yellow-border p-1 '
          id='password' 
          type="password" 
          name='password' 
          required />
        </div>
        <button 
        className='bg-purple-light uppercase font-semibold max-w-max m-auto rounded-full px-6 py-1'
        >Crear</button>
        <Link 
        className='text-center text-sm underline'
        to={"/auth/login"} > O iniciar sesión</Link>
      </form>
    </ContainerAuth>
  )
}

export default Register