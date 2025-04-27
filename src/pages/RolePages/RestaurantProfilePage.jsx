import React from 'react'
import { UserContext } from '../../App'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantProfilePage = () => {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()


  useEffect(() => {
    if (user.role == "user") navigate("/user/user")
    else if (user.role == "admin") navigate("/user/admin")
    else if (user.role == "restaurant") navigate("/user/restaurant")
  }, [])

  return (
    <div className='mx-auto p-4 border-2 rounded-lg border-[#93e2ae] bg-white flex flex-col gap-2'>
      Restaurant
      <div className='p-4 border-2 rounded-lg border-amber-200'>Incoming orders</div>
      <div className='p-4 border-2 rounded-lg border-blue-200'>Active orders</div>
      <div className='p-4 border-2 rounded-lg border-[#93e2ae]'>Completed orders</div>
    </div>
  )
}

export default RestaurantProfilePage
