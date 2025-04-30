import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link, Outlet, useHref, useNavigate } from "react-router-dom";
import { UrlContext } from "../App";
import Arrow from "../assets/arrow.svg";
import ControlFood from "../components/ControlFood";
import Close from "../assets/close.svg"
function ControlFoods() {

    const [refresh, setRefresh] = useState(0)
    const href = useHref()
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const turl = useContext(UrlContext)
    const url = turl.url
    const[foods, setFoods] = useState([])
    
    async function getFoods() {
        const resp = await fetch(url+"/foods")
        const json = await resp.json()
        setFoods(json)
    }

    useEffect(() => {
        try{
            if(user.role != "admin"){
                navigate("/")
            }
        }catch{
            setUser(undefined)
            navigate("/")
        }
        getFoods()
    },[refresh])

  return ( 
    <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2 m-4'>
        <div className="flex justify-between ">
            <div onClick={() => navigate("/user/admin")} className="flex gap-1 border-2 border-[#93e2ae] rounded-lg p-4 w-fit hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
                <img className="w-[36px] h-[36px] rotate-180" src={Arrow} />
                <span className="text-xl mt-0.5">Back</span>
            </div>
            <Link to="/newfood" className="text-2xl rounded-lg border-2 border-[#93e2ae] px-2 pt-4 hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">New food</Link>
        </div>
        <div className="border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2">
            {foods.map((x,i) => <ControlFood data={x} />)}            
        </div>
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/20 flex items-center justify-center ${href == "/controlFoods" ? "hidden" : ""}`}>
            <div className="p-6 border-2 border-[#93e2ae] rounded-lg bg-white relative">
                <button onClick={() => {history.back(); setRefresh(Math.random())}} className="absolute top-2 right-2 p-1 rounded-full hover:cursor-pointer hover:bg-[#93e2ae] transition-all"><img src={Close} /></button>
                <Outlet/>
            </div>
        </div>
    </div>
  );
}

export default ControlFoods;
