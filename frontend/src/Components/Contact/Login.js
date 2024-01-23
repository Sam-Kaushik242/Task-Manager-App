import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        const user = await fetch("http://localhost:3001/login",{
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await user.json()
        localStorage.setItem("user", JSON.stringify(data))
        console.log(data);
        navigate('/')
    }
  return (
    <div>
      <div className={`flex flex-col py-5 px-6 lg:px-8 dark:border rounded-md`}>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='text-center'>
    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">Log in to your account</h2>
    <h1 className='font-bold'>OR</h1>
    <Link to={'/signup'} className='font-bold text-lg text-indigo-700'>Sign Up</Link>
    </div>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
      <div>
        <label for="email" className="block text-sm font-medium leading-6">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="Off" value={email} onChange={(e)=> setEmail(e.target.value)} required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 ">Password</label>
          <div className="text-sm">
            <Link to={"/password/forgot"}><span href="/" className="font-semibold text-indigo-500 hover:text-indigo-400">Forgot password?</span></Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" onClick={handleLogin} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default Login
