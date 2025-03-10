import React from 'react'
import { Link } from 'react-router-dom'

const NavElement = ({ label, to, selected, setSelected }) => {
    return (
        <div className={label == selected ? "content-center min-w-fit w-[6vw] bg-[#93e2ae] border-[#05472a] text-center" : 'content-center min-w-fit w-[6vw] hover:bg-[#C2F0D1] hover:border-[#05472a] transition-all'} onClick={() => setSelected(label)}>
            <Link className='p-4' to={to}>{label}</Link>
        </div>
    )
}

export default NavElement
