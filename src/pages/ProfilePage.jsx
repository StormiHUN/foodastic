import React from 'react'
import { useEffect } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)


  useEffect(() => {
    if (user.role == "user") navigate("/user/user") 
    else if (user.role == "admin") navigate("/user/admin")
    else if (user.role == "restaurant") navigate("/user/restaurnat")
    else{
      setUser(undefined)
      navigate("/login")
    }
  }, [])

  return (
    <div>

      <input type='button' onClick={() => {navigate("/login").then(setUser(undefined))}} value={"Logout user: " + user.email}/>

    </div>
  )
}

export default ProfilePage
