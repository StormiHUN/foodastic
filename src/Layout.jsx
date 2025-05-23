import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavElement from './components/NavElement'
import { useState } from 'react'
import Logo from "./assets/logo.png"
import { UserContext } from './App'
import { useContext } from 'react'

const Layout = () => {

    const [selected, setSelected] = useState("Home")
    const {user, setUser} = useContext(UserContext)

    return (
        <div className='flex flex-col gap-4 text-center h-screen overflow-x-hidden'>
            <div className=' flex border-b-2 bg-white border-[#355e3b]'>
                <div className='cursor-pointer hideImage' onClick={() => setSelected("Home")}>
                    <Link to="/">
                    <img className='w-16' src={Logo} alt="" />
                    </Link>
                </div>
                <div className='flex justify-center w-full'>
                    <NavElement label="Home" to="" selected={selected} setSelected={setSelected} />
                    <NavElement label="Menu" to="/menu" selected={selected} setSelected={setSelected} />
                    <NavElement label="Restaurants" to="/restaurants" selected={selected} setSelected={setSelected} />
                </div>
                <div>
                    {(user == undefined || user == []) ? 
                    <Link className='p-4 flex align-middle hover:underline hover:bg-[#C2F0D1] transition-all' onClick={() => setSelected("Login")} to="/login">
                        Login
                    </Link>
                     : <Link className='p-4 flex align-middle hover:underline hover:bg-[#C2F0D1] transition-all' to="/user">User</Link>}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout
