import React from 'react'
import Allergens from './Allergens'
import Cart from "../assets/cart.svg"
import CartGreen from "../assets/cartgreen.svg"
import { useState } from 'react'
const Food = ({ data, cart, setCart, setRefresh }) => {


    function indexOfFoodByName(name){
        for(let i = 0; i < cart.length; i++) if(cart[i].data.name == name) return i
        return -1
      }
    
      function addToCart(){
        let index = indexOfFoodByName(data.name)
        if(index == -1){
          let temp = {
            data: data,
            size: 1
          }
          let arr = []
          if(cart.length > 0){
            arr = [...cart]
          }
          arr.push(temp)
          setCart([...arr])
          
        }else{
          cart[index].size++
          setCart([...cart])
        }
        setRefresh(Math.random())
      }

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
            <div className='p-1'>
                <button onClick={() => addToCart()} className='flex gap-2 p-1 border-2 border-white hover:border-[#93e2ae] transition-all rounded-full'><img className='p-1' src={Cart} /></button>
            </div>
        </div>
    )
}

export default Food
