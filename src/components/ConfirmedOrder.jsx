import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UrlContext } from '../App'

const ConfirmedOrder = ({ index, finish, data }) => {

  const [cart, setCart] = useState([])
  const turl = useContext(UrlContext)
  const url = turl.url



  async function getCart() {
    const resp = await fetch(url + "/cartbycartid/" + data.cart_id)
    const json = await resp.json()
    setCart(json)
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div className='p-4 border-2 rounded-lg border-[#93e2ae] bg-white flex flex-col gap-2 '>
      <span>
        Order id: {data.order_id}
      </span>
      <div className='w-fit '>
        <div className='h-32 overflow-y-scroll'>
          {cart.map(x => <div className='flex justify-between'><span>{x.name}</span> - <span>{x.count}x</span></div>)}
        </div>
        <button onClick={() => finish(data.order_id, index)} className='mt-2 px-4 py-2 border-2 rounded-lg border-[#93e2ae] hover:cursor-pointer hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all'>Finish</button>
      </div>
    </div>
  )
}

export default ConfirmedOrder
