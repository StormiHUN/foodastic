import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Order = ({ data }) => {

    return (
        <div className='border-2 border-[#93e2ae] rounded-lg p-4 '>
            <div className='flex justify-between'>
                <div className='py-2'>Order id: {data.order_id}</div>
            </div>
            <div className='border-l-2 border-[#93e2ae]'>
                {
                    data.cart.map((x, i) => <div className='flex start-0 ml-2 text-xl'>
                        {x.name} {x.count}x
                    </div>)
                }
            </div>
        </div>
    )
}

export default Order
