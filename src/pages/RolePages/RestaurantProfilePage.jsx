import React from 'react'
import { UserContext } from '../../App'
import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UrlContext } from '../../App'
import UnconfirmedOrder from '../../components/UnconfirmedOrder'
import ConfirmedOrder from '../../components/ConfirmedOrder'
import FinishedOrder from '../../components/FinishedOrder'
const RestaurantProfilePage = () => {

  const { user, setUser } = useContext(UserContext)
  const [restaurant, setRestaurant] = useState({restaurant_id: 0})
  const navigate = useNavigate()
  const turl = useContext(UrlContext)
  const url = turl.url
  const [orders, setOrders] = useState([])
  const [confirmed, setConfirmed] = useState([])
  const [finished, setFinished] = useState([])
  const orderInterval = useRef(null)


  async function confirm(id,ind) {
    const resp = await fetch(url + "/order/confirm/" + id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"}
    })
    const json = await resp.json()
    getOrders()
  }

  async function finish(id,ind) {
    finished.push(confirmed[ind])
    setFinished([...finished])
    const resp = await fetch(url + "/order/finish/" + id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"}
    })
    const json = await resp.json()
    getOrders()
  }

  async function getOrders() {
    let resp = await fetch(url + "/orders/unconfirmed/" + restaurant.restaurant_id)
    let json = await resp.json()
    setOrders(json)
    resp = await fetch(url + "/orders/confirmed/" + restaurant.restaurant_id)
    json = await resp.json()  
    setConfirmed(json)
  }

  async function getRestaurant() {
    const resp = await fetch(url + "/restaurantbyuserid/" + user.user_id)
    const json = await resp.json()
    setRestaurant(json[0])
    getOrders()
  }

  function deleteSelf(id){
    for(let i = 0; i < finished.length; i++){
      if(finished[i].order_id == id){
        finished.splice(i,1)
        break
      }
    }
    setFinished([...finished])
  }



  //let refreshOrders = setInterval(async () => await getOrders(),5000)
  useEffect(() => {
    try {
      if (user.role == "user") navigate("/user/user")
      else if (user.role == "admin") navigate("/user/admin")
      else if (user.role == "restaurant") navigate("/user/restaurant")
    }
    catch {
      setUser(undefined)
      navigate("/login")
    }
    getRestaurant()
    
}, [])

useEffect(() =>{
  orderInterval.current = setInterval(getOrders, 5000)

  return () => clearInterval(orderInterval.current)
  },[restaurant])

  return (
    <div className='mx-auto w-[80%] p-4 border-2 rounded-lg border-[#93e2ae] bg-white flex flex-col gap-2'>
      <div className='flex gap-2 align-middle'>
        <button onClick={() => { navigate("/"); setUser(undefined);clearInterval(refreshOrders) }} className='mt-4 border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all'>Logout</button>
        <div className='mt-6'>Resturant</div>
      </div>
      <div className='p-4 border-2 min-h-68 rounded-lg border-amber-200 flex gap-2 overflow-x-scroll'>{orders.map((x,i) => <UnconfirmedOrder key={"uco"+i} index={i} confirm={confirm} data={x} />)}</div>
      <div className='p-4 border-2 min-h-68 rounded-lg border-blue-200 flex gap-2 overflow-x-scroll'>{confirmed.map((x,i) => <ConfirmedOrder key={"co"+i} index={i} finish={finish} data={x}/>)}</div>
      <div className='p-4 border-2 min-h-68 rounded-lg border-[#93e2ae] flex gap-2 overflow-x-scroll'>{finished.map((x,i) => <FinishedOrder key={"co"+i} deleteSelf={deleteSelf} data={x} />)}</div>
    </div>
  )
}

export default RestaurantProfilePage
