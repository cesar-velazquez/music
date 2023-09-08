import React from 'react'
import ContainerAuth from '../components/Layout/ContainerAuth'
import { Link, useNavigate } from 'react-router-dom'
import { axiosMusic } from '../Utils/axios.Config'
import { useUserInfo } from '../store/userInfo'

const Login = () => {
  const login = useUserInfo(state => state.login)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    axiosMusic
    .post("/api/auth/login", data)
    .then(({data}) => {
      login(data)
      alert("Bienvenido")
      navigate("/")
    })
    .catch((err)=> console.log(err))
  }

  return (
    <ContainerAuth>
      <header className='hidden sm:block sm:max-w-[350px] '>
        <img src="/imgs/logindesktop.png" alt="Img" />
      </header>
      <form
        onSubmit={handleSubmit}
        className='grid gap-6 w-[min(100%,_350px)] sm:w-[300px] '
        action="">
        <h2 className='uppercase font-semibold text-2xl '>Iniciar Sesión</h2>
        <div className='grid gap-4'>
          <label
            className='text-white/50'
            htmlFor="email">Correo:</label>
          <input
            className='bg-transparent outline-none border-b border-yellow-border p-1 '
            id='email' type="email" name='email' />
        </div>
        <div className='grid gap-4'>
          <label
            className='text-white/50'
            htmlFor="password">Contraseña:</label>
          <input
            className='bg-transparent outline-none border-b border-yellow-border p-1 '
            id='password' type="password" name='password' />
        </div>
        <button
          className='bg-purple-light uppercase font-semibold max-w-max m-auto rounded-full px-6 py-1'
        >Entrar</button>
        <Link
          className='text-center text-sm underline'
          to={"/auth/register"} > O crear una cuenta nueva</Link>          
      </form>
    </ContainerAuth>
  )
}

export default Login