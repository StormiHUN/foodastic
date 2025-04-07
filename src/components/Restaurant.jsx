import React from 'react'

const Restaurant = ({item}) => {
  return (
    <div className='bg-white border-2 rounded-lg border-[#93e2ae] p-4 mb-4'>
      <div className='flex gap-4'>
        <img className='rounded-lg' src={item.restaurant_picture} />
        <div>
            <h2 className='text-2xl font-bold'>{item.restaurant_name} (Foodastic #{item.restaurant_id})</h2>
            <p className='flex justify-items-start'>Address: {item.restaurant_address}</p>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
