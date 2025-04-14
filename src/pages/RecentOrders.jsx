import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Order from '../components/Order'
import { UrlContext } from '../App'
const RecentOrders = () => {
    
    const {user, setUser} = useContext(UserContext)

    const [orders, setOrders] = useState([
        {
            order_id: 1,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        },{
            order_id: 2,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        },{
            order_id: 2,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        },{
            order_id: 2,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        },{
            order_id: 2,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        },{
            order_id: 2,
            user_id: 1,
            restaurant_id: 1,
            cart_id: "1#2025-04-12T14:20_34Z",
            cart:[
                {
                    food_id: 1,
                    count: 2,
                },
                {
                    food_id: 2,
                    count: 1,
                }
            ]
        }
])

    const turl = useContext(UrlContext)
      const url = turl.url

    useEffect(() => {
        async function getOrders() {
            const resp = await fetch(url+"/orderhistory/"+user.user_id)
            const json = await resp.json()
            console.log(json)
            setOrders(json)
        }
        getOrders()
    },[])

    return (
    <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2 m-4'>
        <div className='flex justify-between'>
            <Link className='border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all' to="/user">Back</Link>
            <p className='mt-3'>{user.first_name} {user.last_name}'s orders</p>
        </div>
        <div className=' border-2 border-[#93e2ae] rounded-lg p-4 grid grid-cols-4 gap-4 recentOrdersContainer'>
            {orders.length > 0 ? 
            orders.map((x,i) => <Order key={i+":userorder"} data={x} />)
        : "No orders made."}
        </div>
    </div>
  )
}

export default RecentOrders
