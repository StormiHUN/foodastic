import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
import { UrlContext } from "../App";
import Arrow from "../assets/arrow.svg";
import ControlUser from "../components/ControlUser";
function ControlUsers() {

    const [refresh, setRefresh] = useState(0)
    const href = useHref()
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const turl = useContext(UrlContext)
    const url = turl.url
    const[users, setUsers] = useState([])
    
    async function getUsers() {
        const resp = await fetch(url+"/users")
        const json = await resp.json()
        console.log(json)
        setUsers(json)
    }

    useEffect(() => {
        if(user.role != "admin"){
            navigate("/")
        }
        getUsers()
    },[refresh])

  return ( 
    <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2 m-4'>
        <div className="flex justify-between ">
            <div onClick={() => navigate("/user/admin")} className="flex gap-1 border-2 border-[#93e2ae] rounded-lg p-4 w-fit hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
                <img className="w-[36px] h-[36px] rotate-180" src={Arrow} />
                <span className="text-xl mt-0.5">Back</span>
            </div>
            <p className="text-3xl p-4">Users</p>
        </div>
        <div className="border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2">
            {users.map((x,i) => <ControlUser setRefresh={setRefresh} data={x} />)}            
        </div>
    </div>
  );
}

export default ControlUsers;
