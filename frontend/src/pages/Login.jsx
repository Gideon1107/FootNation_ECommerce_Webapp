import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const toastSettings = {
    hideProgressBar: true,
    autoClose: 2000
  }

  const [currentState, setCurrentState] = useState('LOGIN');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        if (currentState === "SIGN UP") {
          const response = await axios.post(backendUrl + "/api/user/register", {name,email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
          } else {
            toast.error(response.data.message, toastSettings)
          }
        } else {
          const response = await axios.post(backendUrl + "/api/user/login", {email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
          } else {
            toast.error(response.data.message, toastSettings)
          }
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message, toastSettings)
      }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='text-3xl'>{currentState}</p>
          {/* <hr  className='border-none h-[1.5px] w-8 bg-gray-800 '/> */}
        </div>
        {currentState === 'LOGIN' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> }
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'>Forgot your password?</p>
            {
              currentState === "LOGIN"
              ? <p onClick={() => setCurrentState('SIGN UP')} className='cursor-pointer '>Create an account</p>
              : <p onClick={() => setCurrentState('LOGIN')} className='cursor-pointer '>Login Here</p>
            }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'LOGIN' ? 'Sign In' : 'Sign Up'}</button>
        <div className='flex flex-row gap-2 border px-2'>
            <p>Demo Account: </p>
            <p>Demo123@demo.com | Demo12345</p>
        </div>
    </form>
  )
}

export default Login