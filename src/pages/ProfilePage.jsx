import React from 'react'
import { useState } from 'react'
import Notfound from "./NotFound"
import UserProfilePage from './RolePages/UserProfilePage'
import AdminProfilePage from './RolePages/AdminProfilePage'
import RestaurantProfilePage from './RolePages/RestaurantProfilePage'
import { useEffect } from 'react'

const ProfilePage = ({ data }) => {

  const [role, setRole] = useState("user")
  const [Page, setPage] = useState(<Notfound />)


  useEffect(() => {
    if (role == "user") setPage(<UserProfilePage data={data} />)
    else if (role == "admin") setPage(<AdminProfilePage data={data} />)
    else if (role == "restaurant") setPage(<RestaurantProfilePage data={data} />)
  }, [])

  return (
    <div></div>
  )
}

export default ProfilePage
