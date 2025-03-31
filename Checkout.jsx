import React from 'react'
import { CartContext } from '../App'
import { useContext } from 'react'


const Checkout = () => {
    const {cart, setCart} = useContext(CartContext)

    return (
        <div className=''>
            {cart.map((x,i) => <p key={i}>{x.data.name}</p>)}
        </div>
    )
}

export default Checkout