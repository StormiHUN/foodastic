import React from 'react'
import Allergens from './Allergens'
import Cart from "../assets/cart.svg"
import CartGreen from "../assets/cartgreen.svg"
import { useState } from 'react'
const Food = ({ data }) => {

    const [onhover, setonhover] = useState(false)

    return (
        <div className='bg-white border-6 border-[#93e2ae] rounded-lg w-fit'>
            <img src={data.pic} />
            <div className='flex justify-between p-1'>
                <div>
                    <p className='text-2xl'>{data.name}</p>
                    <Allergens data={data.allergens} />
                </div>
                <div className='my-auto'>
                    <p className='text-xl'>{data.cost},- Ft</p>
                </div>
            </div>
            <div className='p-1'>
                <button className='flex gap-2 p-1 border-2 border-white hover:border-[#93e2ae] transition-all rounded-full' onMouseOver={() => setonhover(true)}  onMouseEnter={() => setonhover(true)} onMouseLeave={() => setonhover(false)}><img className='p-1' src={onhover ? CartGreen : Cart} /></button>
            </div>
        </div>
    )
}

export default Food
