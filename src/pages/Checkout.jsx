import React from 'react'
const Checkout = ({cart, setCart}) => {
    return (
        <div className=''>
            {cart.map(x => <p>{x.data.name}</p>)}
        </div>
    )
}

export default Checkout