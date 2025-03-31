import React from 'react'
import { CartContext } from '../App'
import { useContext } from 'react'


const Checkout = () => {
    const {cart, setCart} = useContext(CartContext)

    return (
        <div className='bg-white border-6 border-[#93e2ae] rounded-lg mx-auto p-4'>
            <h2></h2>
            {cart.map((x,i) => <p key={i}>{x.data.name}</p>)}
        </div>
    )
}

export default Checkout