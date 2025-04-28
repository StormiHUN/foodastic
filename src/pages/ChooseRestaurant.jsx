import React from 'react'
import { useState, useEffect } from 'react'
import Restaurant from '../components/Restaurant'
import { CartContext } from '../App'
import { UserContext } from '../App'
import { useContext } from 'react'
import { UrlContext } from '../App'
import { useNavigate } from 'react-router-dom'

const ChooseRestaurant = () => {
  
    const navigate = useNavigate()
    const turl = useContext(UrlContext)
      const url = turl.url

    const {cart, setCart} = useContext(CartContext)
    const {user, setUser} = useContext(UserContext)

    const [restaurants, setRestaurants] = useState([{
      restaurant_adress: "anyád hihi",
      restaurant_picture: "https://placehold.co/450x300"
    }])
  
    useEffect(() => {
      const getRestaurants = async () => {
        const resp = await fetch(url+"/restaurants")
        const json = await resp.json()
        setRestaurants(json)
      }
      getRestaurants()
    },[])
    
    async function placeOrder(restaurant_id) {
        let temp = []
        for(let i of cart){
            temp.push({
                food_id: i.data.food_id,
                size: i.size
            })
        }
        const resp = await fetch(url+"/order",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                user_id: user.user_id,
                restaurant_id: restaurant_id,
                cart: temp
            })
        })
        const json = await resp.json()
        console.log(json)
        if(json.order_id){
          navigate("/finalOrder/"+json.order_id)
        }
    }

    return (
      <div className='flex justify-center overflow-x-hidden'>
        <div className='w-fit h-fit p-2'>
          {restaurants.map((item, i) => <div className='p-4 bg-white border-2 rounded-lg border-[#93e2ae] mb-4'><Restaurant key={"d"+i} item={item}/><button onClick={() => placeOrder(item.restaurant_id)} className='text-3xl hover:bg-[#93e2ae] py-2 px-4 rounded-full transition-all'>Place order</button></div>)}
        </div>
      </div>
    )
}

export default ChooseRestaurant
