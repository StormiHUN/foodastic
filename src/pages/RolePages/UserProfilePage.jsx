import React from 'react'
import { UrlContext, UserContext } from '../../App'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const UserProfilePage = () => {

  const turl = useContext(UrlContext)
  const url = turl.url
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState("")
  const [newName, setNewName] = useState("")
  const [newNamePsw, setNewNamePsw] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newEmailPsw, setNewEmailPsw] = useState("")
  const [newPsw, setNewPsw] = useState("")
  const [newPsw2, setNewPsw2] = useState("")
  const [newPswPsw, setNewPswPsw] = useState("")
  const [userPic, setUserPic] = useState("")
  const [userFname, setUserFname] = useState("")
  const [userLname, setUserLname] = useState("")
  const [userEmail, setUserEmail] = useState("")

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
    setUserPic(user.profile_picture ? user.profile_picture : "https://placehold.co/100x100")
    setUserEmail(user.email)
    setUserFname(user.first_name)
    setUserLname(user.last_name)
  }, [])

  

  async function changeImage() {
    const resp = await fetch(url+"/user/image/"+user.user_id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({image: imgUrl})
    })
    const json = await resp.json()
    user.profile_picture = (json.status == "OK" ? imgUrl : "")
    setUserPic(imgUrl)
  }

  async function changeName() {
    const resp = await fetch(url+"/user/name/"+user.user_id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        first_name: newName.split(" ")[0],
        last_name: newName.split(" ")[1],
        password: newNamePsw
      })
    })
    const json = await resp.json()
    if(json.error){
      alert("Invalid password!")
      return
    }
    user.first_name = newName.split(" ")[0]
    user.last_name = newName.split(" ")[1]
    setUserFname(newName.split(" ")[0])
    setUserLname(newName.split(" ")[1])
  }

  async function changeEmail() {
    const resp = await fetch(url+"/user/email/"+user.user_id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        email: newEmail,
        password: newEmailPsw
      })
    })
    const json = resp.json()
    if(json.error){
      alert("Invalid password!")
      return
    }
    user.email = newEmail
    setUserEmail(newEmail)
  }

  async function changePassword() {
    const resp = await fetch(url+"/user/password/"+user.user_id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        password: newPsw,
        passwordOld: newPswPsw
      })
    })
    const json = await resp.json()
    if(json.error){
      alert("Invalid password!")
      return
    }
    alert("Password changed succesfully!")
  }


  return (
    <div className=''>

      <div className='w-fit mx-auto p-4 border-2 rounded-lg border-[#93e2ae] bg-white'>
        <div className=' grid grid-cols-2 gap-2 gap-x-8 xs:bg-amber-400 smallScreenGrid'>
          <div className='flex flex-col gap-2 border-b-2 border-[#93e2ae] pb-2'>
            <img className='rounded-full w-[78px] h-[78px] mx-auto' src={userPic} alt="" />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder='Image url' />
            <input onClick={() => changeImage()} className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change image" />
          </div>
          <div className='flex flex-col gap-2 border-b-2 border-[#93e2ae] pb-2 '>
            {userFname + " " + userLname}
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Change name' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newNamePsw} onChange={(e) => setNewNamePsw(e.target.value)} placeholder='Password' />
            <input onClick={() => changeName()} className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change name" />
          </div>
          <div className='flex flex-col gap-2 smallScreenGridBorder'>
            Email: {userEmail}
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='Change email' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newEmailPsw} onChange={(e) => setNewEmailPsw(e.target.value)} placeholder='Password' />
            <input onClick={() => changeEmail()} className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change email" />
          </div>
          <div className='flex flex-col gap-2'>
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPsw} onChange={(e) => setNewPsw(e.target.value)} placeholder='New password' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPsw2} onChange={(e) => setNewPsw2(e.target.value)} placeholder='New password again' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPswPsw} onChange={(e) => setNewPswPsw(e.target.value)} placeholder='Old password' />
            <input onClick={() => changePassword()} className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change password" />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Link className='mt-4 border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all' to="/recentOrders" value="Recent orders">Recent orders</Link>
          <button onClick={() => { navigate("/"); setUser(undefined) }} className='mt-4 border-2 rounded-lg border-[#93e2ae] bg-white px-4 py-2 hover:border-[#355e3b] hover:bg-[#C2F0D1] hover:cursor-pointer transition-all'>Logout</button>
        </div>
        
      </div>

    </div>
  )
}

export default UserProfilePage
