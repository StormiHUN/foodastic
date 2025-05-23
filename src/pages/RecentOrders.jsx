import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Order from '../components/Order'
import { UrlContext } from '../App'
const RecentOrders = () => {
    
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const [orders, setOrders] = useState([])

    const turl = useContext(UrlContext)
      const url = turl.url

    useEffect(() => {
        try{
            if(user.role != "user" || user.first_name == undefined){
                navigate("/")
            }
        }catch{
            setUser(undefined)
            navigate("/")
        }
        setName(user.first_name + " " + user.last_name)
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
            <p className='mt-3'>{name}'s orders</p>
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
