import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UrlContext } from "../App";
import Arrow from "../assets/arrow.svg";
import More from "../assets/more.svg"

function ControlFoods() {

    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    const turl = useContext(UrlContext)
    const url = turl.url
    const[foods, setFoods] = useState([])
    
    async function getFoods() {
        const resp = await fetch(url+"/foods")
        const json = await resp.json()
        console.log(json)
        setFoods(json)
    }

    useEffect(() => {
        if(user.role != "admin"){
            navigate("/")
        }
        getFoods()
    },[])

  return (
    <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2 m-4'>
        <div className="flex justify-between ">
            <div onClick={() => navigate("/user/admin")} className="flex gap-1 border-2 border-[#93e2ae] rounded-lg p-4 w-fit hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
                <img className="w-[36px] h-[36px] rotate-180" src={Arrow} />
                <span className="text-xl mt-0.5">Back</span>
            </div>
            <Link to="/newfood" className="text-2xl mt-5 hover:cursor-pointer">New food</Link>
        </div>
        <div className="border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col gap-2 mt-2">
            {foods.map((x,i) => 
                <div className="flex gap-2 border-b-2 border-[#93e2ae] p-2 justify-between">
                    <div className="flex gap-4">
                        <span>id: {x.food_id}</span>
                        <span>{x.name}</span>
                    </div>
                    <div>
                        <img src={More} />
                    </div>
                </div>
            )}            
        </div>
    </div>
  );
}

export default ControlFoods;
