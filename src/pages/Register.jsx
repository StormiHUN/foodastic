import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const url = "http://localhost:88/register"

  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [psw2, setPsw2] = useState("")

  async function register() {
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
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="password" placeholder='Password again' value={psw2} onChange={(e) => setPsw2(e.target.value)} />
        <input className='p-2 w-full border-1 border-gray-400 rounded-sm hover:bg-[#C2F0D1] hover:border-[#355e3b] transition-all cursor-pointer' type="button" value="Register" onClick={() => register()} />
        <p>Aleardy have an account? Log in <Link to="/login" className="text-blue-600 underline decoration-blue-600">Here</Link>!</p>
      </div>
    </div>
  )
}

export default Register
