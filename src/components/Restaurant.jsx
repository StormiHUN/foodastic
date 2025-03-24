import React from 'react'

const Restaurant = ({item}) => {
  return (
    <div className='bg-white border-2 rounded-lg border-[#93e2ae] p-4'>
      <div className='flex gap-4'>
        <img className='rounded-lg' src={item.restaurant_picture} />
        <div>
            <h2 className='text-2xl font-bold'>Foodastic restaurant</h2>
            <p className='flex justify-items-start'>Address: {item.restaurant_adress}</p>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
