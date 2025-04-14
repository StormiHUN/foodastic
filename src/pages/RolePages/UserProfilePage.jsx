import React from 'react'
import { UserContext } from '../../App'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HistoryCard from '../../components/HistoryCard'

const UserProfilePage = () => {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [history, setHistory] = useState(["sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt", "sajt"])

  useEffect(() => {
    if (user.role == "user") navigate("/user/user")
    else if (user.role == "admin") navigate("/user/admin")
    else if (user.role == "restaurant") navigate("/user/restaurnat")
    async function getHistotry() {
      //const resp = await fetch("http://10.201.2.13/orderhistory/"+user.user_id)
      //const json = await resp.json()
      //setHistory(json)
    }
    getHistotry()
  }, [])

  const [imgUrl, setImgUrl] = useState("")
  const [newName, setNewName] = useState("")
  const [newNamePsw, setNewNamePsw] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newEmailPsw, setNewEmailPsw] = useState("")
  const [newPsw, setNewPsw] = useState("")
  const [newPsw2, setNewPsw2] = useState("")
  const [newPswPsw, setNewPswPsw] = useState("")

  return (
    <div className=''>

      <div className='w-fit mx-auto p-4 border-2 rounded-lg border-[#93e2ae] bg-white'>
        <div className=' grid grid-cols-2 gap-2 gap-x-8 xs:bg-amber-400 smallScreenGrid'>
          <div className='flex flex-col gap-2 border-b-2 border-[#93e2ae] pb-2'>
            <img className='rounded-full w-[78px] mx-auto' src="https://placehold.co/100x100" alt="" />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder='Image url' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change image" />
          </div>
          <div className='flex flex-col gap-2 border-b-2 border-[#93e2ae] pb-2 '>
            {user.first_name + " " + user.last_name}
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Change name' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newNamePsw} onChange={(e) => setNewNamePsw(e.target.value)} placeholder='Password' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change name" />
          </div>
          <div className='flex flex-col gap-2 smallScreenGridBorder'>
            Email: {user.email}
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='Change email' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newEmailPsw} onChange={(e) => setNewEmailPsw(e.target.value)} placeholder='Password' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change email" />
          </div>
          <div className='flex flex-col gap-2'>
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPsw} onChange={(e) => setNewPsw(e.target.value)} placeholder='New password' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPsw2} onChange={(e) => setNewPsw2(e.target.value)} placeholder='New password again' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] transition-all' type="password" value={newPswPsw} onChange={(e) => setNewPswPsw(e.target.value)} placeholder='Old password' />
            <input className='p-2 border-2 border-gray-400 rounded-lg hover:border-[#355e3b] hover:bg-[#C2F0D1] transition-all' type="button" value="Change password" />
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
