import React from 'react'
import Allergens from './Allergens'
import Cart from "../assets/cart.svg"
import Arrow from "../assets/arrow.svg"
import { useState } from 'react'
const Food = ({ data, cart, setCart }) => {

  const [count, setCount] = useState(1)

  console.log(data)

  function indexOfFoodByName(name) {
    for (let i = 0; i < cart.length; i++) if (cart[i].data.name == name) return i
    return -1
  }

  function addToCart() {
    let index = indexOfFoodByName(data.name)
    if (index == -1) {
      let temp = {
        data: data,
        size: count
      }
      let arr = []
      if (cart.length > 0) {
        arr = [...cart]
      }
      arr.push(temp)
      setCart([...arr])

    } else {
      cart[index].size += count
      setCart([...cart])
    }
  }


  return (
    <div className='bg-white border-6 border-[#93e2ae] rounded-lg w-fit'>
      <img src={data.image} />
      <div className='flex justify-between p-1'>
        <div>
          <p className='text-2xl'>{data.name}</p>
          {/*<Allergens data={data.allergens} />*/}
        </div>
        <div className='my-auto'>
          <p className='text-xl'>{data.price},- Ft</p>
        </div>
      </div>
      <div className='flex justify-between p-1'>
        <button onClick={() => addToCart()} className='flex h-fit gap-2 p-1 border-2 border-white hover:border-[#93e2ae] transition-all rounded-full'><img className='p-1' src={Cart} /></button>
        <div className='flex h-fit mt-1 border rounded-full'>
          <button className='rounded-full w-12 border-r hover:bg-[#93e2ae] transition-all' onClick={() => setCount(count > 1 ? count - 1 : 99)}><img className='rotate-180' src={Arrow} alt="decrease" /></button>
          <p className='text-4xl w-12 h-12 p-1'>{count}</p>
          <button className='rounded-full w-12 border-l hover:bg-[#93e2ae] transition-all' onClick={() => setCount(count < 99 ? count + 1 : 1)}><img src={Arrow} alt="increase" /></button>
        </div>
      </div>
    </div>
  )
}

export default Food
