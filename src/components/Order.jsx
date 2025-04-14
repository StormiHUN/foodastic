import React from 'react'

const Order = ({ data }) => {
    console.log(data)
    return (
        <div className='border-2 border-[#93e2ae] rounded-lg p-4 '>
            <div className='flex justify-between'>
                <div className='py-2'>Order id: {data.order_id}</div>
                <button className='border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all'>Re order</button>
            </div>

        </div>
    )
}

export default Order
