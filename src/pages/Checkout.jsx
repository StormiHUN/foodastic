import React from 'react'
const Checkout = ({cart, setCart}) => {
    return (
        <div className=''>
            {cart.map((x,i) => <p key={i}>{x.data.name}</p>)}
        </div>
    )
}

export default Checkout