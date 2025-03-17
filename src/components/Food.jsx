import React from 'react'
import Allergens from './Allergens'
const Food = ({ data }) => {
    return (
        <div className='bg-white border-6 border-[#93e2ae] rounded-lg w-fit'>
            <img src={data.pic} />
            <div className='flex justify-between p-1'>
                <div>
                    <p className='text-2xl'>{data.name}</p>
                    <Allergens data={data.allergens} />
                </div>
                <div className='my-auto'>
                    <p className='text-xl'>{data.cost},- Ft</p>
                </div>
            </div>
        </div>
    )
}

export default Food
