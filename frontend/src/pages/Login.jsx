import React, {useState} from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('LOGIN');

  const onSubmitHandler = async (event) => {
      event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='text-3xl'>{currentState}</p>
          {/* <hr  className='border-none h-[1.5px] w-8 bg-gray-800 '/> */}
        </div>
        {currentState === 'LOGIN' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> }
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
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
            <p>Demo123@demo.com | Demo123</p>
        </div>
    </form>
  )
}

export default Login