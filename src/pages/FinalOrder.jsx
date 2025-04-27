import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FinalOrder = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()
  return (
    <div className='w-fit mx-auto p-4 border-2 rounded-lg border-[#93e2ae] bg-white'>
        <div>Your order number</div>
        <div className='text-4xl'>{id}</div>
        <div>Go to the register</div>
        <div>If you close this page you can always check your order in the recent orders menu <span onClick={() => navigate("/recentOrders")} className='text-blue-500 hover:text-blue-800' >Here</span>!</div>
    </div>
  )
}

export default FinalOrder
