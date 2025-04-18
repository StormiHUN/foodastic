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
    else if (user.role == "restaurant") navigate("/user/restaurnat")
  }, [])

  return (
    <div>
      Restaurant
    </div>
  )
}

export default RestaurantProfilePage
