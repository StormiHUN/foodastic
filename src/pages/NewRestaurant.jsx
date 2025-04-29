import React from "react";
import { useContext } from "react";
import { UrlContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/arrow.svg"
function NewRestaurant() {
  const turl = useContext(UrlContext)
  const url = turl.url
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [img, setImg] = useState("")
  const [psw, setPsw] = useState("")
  const [psw2, setPsw2] = useState("")
  async function newRestaurant() {
    const resp = await fetch(url + "/restaurant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ restaurant_name: name, restaurant_address: address, restaurant_picture: img, password: psw })
    })
    const json = await resp.json()
    if (json.status == "Created") alert("New restaurant made!")
    else if (json.error) {
      alert(json.error)
    }
  }

  return (
    <div className="w-fit mx-auto border-2 rounded-lg border-[#93e2ae] bg-white p-4">
      <div onClick={() => navigate("/controlRestaurants")} className="mb-2 flex gap-1 border-2 border-[#93e2ae] rounded-lg p-4 w-fit hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
                <img className="w-[36px] h-[36px] rotate-180" src={Arrow} />
                <span className="text-xl mt-0.5">Back</span>
              </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label className="mr-3" htmlFor="restaurantName">Name: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" id="restaurantName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex justify-between">
            <label htmlFor="restaurantAddress">Address: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" id="restaurantName" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="flex justify-between">
            <label className="mr-2" htmlFor="restaurantPicture">Picture: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" id="restaurantName" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
          </div>
          <div className="flex justify-between">
            <label className="mr-2" htmlFor="restaurantPicture">Password: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" id="restaurantName" type="password" value={psw} onChange={(e) => setPsw(e.target.value)} />
          </div>
          <div className="flex justify-between">
            <label className="mr-2" htmlFor="restaurantPicture">Again: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" id="restaurantName" type="password" value={psw2} onChange={(e) => setPsw2(e.target.value)} />
          </div>
          <button className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] hover:bg-[#93e2ae] hover:cursor-pointer transition-all" onClick={() => newRestaurant()}>New restaurant</button>
        </div>
        <div>
          <img className="rounded-lg border-2 border-[#93e2ae] w-[300px] h-[200px]" src={img} alt="restaurant image" />
        </div>
      </div>
    </div>
  );
}

export default NewRestaurant;
