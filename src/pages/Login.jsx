import React from 'react'
import { useState } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const url = "http://10.201.2.13/login"

  const [user, setUser] = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")

  async function login() {
      const resp = await fetch(url)
      const json = await resp.json()
  }

  return (
    <div className='border-6 border-[#93e2ae] rounded-lg p-4 bg-white w-fit mx-auto'>
      <div className='flex flex-col justify-start'>
        <h2 className='text-3xl mb-2'>Foodastic</h2>
        <div className='mb-4'>
          <p>Taste, quality, convenience</p>
          <hr />
        </div>
        <label className='w-fit text-sm' htmlFor="email">Email</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
        <label className='w-fit text-sm' htmlFor="password">Password</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="password" placeholder='Password' value={psw} onChange={(e) => setPsw(e.target.value)} id="password" />
        <input className='p-2 w-full border-1 border-gray-400 rounded-sm hover:bg-[#C2F0D1] hover:border-[#355e3b] transition-all cursor-pointer' type="button" value="Login" onClick={() => login()} />
        <p>Dont have an account? Register one <Link to="/register" className="text-blue-600 underline decoration-blue-600">Here</Link>!</p>
      </div>
    </div>
  )
}

export default Login
