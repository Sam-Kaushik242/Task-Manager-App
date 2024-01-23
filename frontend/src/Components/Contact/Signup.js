import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(()=> {
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

  const collectData = async (e) =>{
    e.preventDefault()
    console.log(name, email, password);
    const user = await fetch('http://localhost:3001/register', {
      method: "POST",
      body: JSON.stringify({name, email, password}),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    let data = await user.json()
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data))
    navigate('/');
  }



  return (
    <div>
      <div className={`flex min-h-full flex-col px-6  lg:px-8 rounded-md dark:border`} style={{marginTop: "-2.5rem"}}>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <div className='text-center'>
    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
    <h1 className='font-bold'>OR</h1>
    <Link to={'/login'} className='font-bold text-lg text-indigo-700'>Log In</Link>
    </div>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" >
    <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 ">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="name" value={name} onChange={(e)=> setName(e.target.value)} autoComplete='Off' required className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 ">Email address</label>        <div className="mt-2">
          <input id="email" name="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md border-0 p-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password"  className="block text-sm font-medium leading-6 ">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button onClick={collectData} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-5 text-center text-sm text-gray-500">
      Not a member?
      <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default Signup
