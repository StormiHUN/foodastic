import React from 'react'
import { useState } from 'react'
import Notfound from "./NotFound"
import UserProfilePage from './RolePages/UserProfilePage'
import AdminProfilePage from './RolePages/AdminProfilePage'
import RestaurantProfilePage from './RolePages/RestaurantProfilePage'
import { useEffect } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ data }) => {

  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)
  const [role, setRole] = useState("user")
  const [Page, setPage] = useState(<Notfound />)


  useEffect(() => {
    if (role == "user") setPage(<UserProfilePage data={data} />)
    else if (role == "admin") setPage(<AdminProfilePage data={data} />)
    else if (role == "restaurant") setPage(<RestaurantProfilePage data={data} />)
  }, [])

  return (
    <div>

      <input type='button' onClick={() => {navigate("/login").then(setUser(undefined))}} value={"Logout user: " + user.email}/>

    </div>
  )
}

export default ProfilePage
