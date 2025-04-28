import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UrlContext } from '../App'

const FinishedOrder = ({ deleteSelf,data }) => {

  const [cart, setCart] = useState([])
  const turl = useContext(UrlContext)
  const url = turl.url


  
  async function getCart() {
    const resp = await fetch(url + "/cartbycartid/" + data.cart_id)
    const json = await resp.json()
    setCart(json)
  }

  useEffect(() => {
    setTimeout(() => {deleteSelf(data.order_id)},120000)
      getCart()
    }, [])

  return (
    <div className='p-4 border-2 rounded-lg border-[#93e2ae] bg-white flex flex-col gap-2 '>
        <span>
        Order id: {data.order_id}
        </span>
        <div className='h-32 overflow-y-scroll'>
          {cart.map(x => <div className='flex justify-between'><span>{x.name}</span> - <span>{x.count}x</span></div>)}
        </div>
    </div>
  )
}

export default FinishedOrder
