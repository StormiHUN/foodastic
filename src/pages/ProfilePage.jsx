import React from 'react'
import { useEffect } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)


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
  }, [])

  return (
    <div>

      <input type='button' onClick={() => { navigate("/login").then(setUser(undefined)) }} value={"How did you get here? You can leave by clicking this text."} />

    </div>
  )
}

export default ProfilePage
