import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavElement from './components/NavElement'
import { useState } from 'react'
import Logo from "./assets/logo.png"

const Layout = () => {

    const [selected, setSelected] = useState("Home")

    return (
        <div className='bgImage flex flex-col gap-4 text-center h-screen'>
            <div className=' flex border-b-2 bg-white border-[#355e3b]'>
                <div className='cursor-pointer' onClick={() => setSelected("Home")}>
                    <Link to="/">
                    <img className='w-[3vw]' src={Logo} alt="" />
                    </Link>
                </div>
                <div className='flex justify-center w-[90%]'>
                    <NavElement label="Home" to="" selected={selected} setSelected={setSelected} />
                    <NavElement label="Menu" to="/menu" selected={selected} setSelected={setSelected} />
                    <NavElement label="Restaurants" to="/restaurants" selected={selected} setSelected={setSelected} />
                </div>
            </div>
            <Outlet/>
            <div className='mt-auto text-center opacity-60'>Foodastic by Kandó</div>
        </div>
    )
}

export default Layout
