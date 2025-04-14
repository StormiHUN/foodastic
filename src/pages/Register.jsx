import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'
import { UrlContext } from '../App'
const Register = () => {

  const turl = useContext(UrlContext)
    const url = turl.url
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [psw, setPsw] = useState("")
  const [psw2, setPsw2] = useState("")
  const [err, setErr] = useState("")

  async function register() {
    if(psw != psw2){
      setErr("Passwords do not match!")
      return
    }
    const resp = await fetch(url+"/user",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        password: psw
      })
    })
    const json = await resp.json()
    if(resp.status == 409){
      setErr("Email already in use!")
      return
    }
    setUser(json)
    navigate("/user")
  }

  return (
    <div className='border-6 border-[#93e2ae] rounded-lg p-4 bg-white w-fit mx-auto'>
      <div className='flex flex-col justify-start'>
        <h2 className='text-3xl mb-2'>Foodastic</h2>
        <div className='mb-4'>
          <p>Taste, quality, convenience</p>
          <hr />
        </div>
        <label className='w-fit text-sm' htmlFor="firstname">First name</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="text" placeholder='First name' value={fname} onChange={(e) => {setFname(e.target.value); setErr("")}} id="firstname" />
        <label className='w-fit text-sm' htmlFor="lastname">Last name</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="text" placeholder='Last name' value={lname} onChange={(e) => {setLname(e.target.value); setErr("")}} id="lastname" />
        <label className='w-fit text-sm' htmlFor="email">Email</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="text" placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value); setErr("")}} id="email" />
        <label className='w-fit text-sm' htmlFor="password">Password</label>
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="password" placeholder='Password' value={psw} onChange={(e) => {setPsw(e.target.value); setErr("")}} id="password" />
        <input className='p-2 border-1 border-gray-400 rounded-sm mb-2' type="password" placeholder='Password again' value={psw2} onChange={(e) => {setPsw2(e.target.value); setErr("")}} />
        <input className='p-2 w-full border-1 border-gray-400 rounded-sm hover:bg-[#C2F0D1] hover:border-[#355e3b] transition-all cursor-pointer' type="button" value="Register" onClick={() => register()} />
        {err != "" ? <p className='text-red-500'>{err}</p> : ""}
        <p>Aleardy have an account? Log in <Link to="/login" className="text-blue-600 underline decoration-blue-600">Here</Link>!</p>
      </div>
    </div>
  )
}

export default Register
