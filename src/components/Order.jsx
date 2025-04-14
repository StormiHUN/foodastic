import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Order = ({ data }) => {
    
    const {cart, setCart} = useContext(CartContext)
    const navigate = useNavigate()

    async function reorder() {
        let temp = []
        for(let i of data.cart) temp.push({data:i})
        setCart(temp)
        navigate("/chooserestaurant")
    }

    return (
        <div className='border-2 border-[#93e2ae] rounded-lg p-4 '>
            <div className='flex justify-between'>
                <div className='py-2'>Order id: {data.order_id}</div>
                <button onClick={() => reorder()} className='border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all'>Re order</button>
            </div>
            <div className='border-l-2 border-[#93e2ae]'>
                {
                    data.cart.map((x,i) => <div className='flex start-0 ml-2 text-xl'>
                        {x.name} {x.count}x
                    </div>)
                }
            </div>
        </div>
    )
}

export default Order
