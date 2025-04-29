import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UrlContext } from "../App";
function EditRestaurant() {

  const navigate = useNavigate()
  const turl = useContext(UrlContext)
  const url = turl.url
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [img, setImg] = useState("")

  async function editRestaurant() {
    const resp = await fetch(url + "/restaurant/" + restaurant.restaurant_id,{
      method: "PUT",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        restaurant_name: name,
        restaurant_address: address,
        restaurant_picture: img
      })
    })
    const json = await resp.json()
    if(json.status == "OK"){
      alert("restaurant data has been modified!")
    }
  }


  useEffect(() => {
    async function getRestaurant() {
      const resp = await fetch(url + "/restaurant/" + id)
      const json = await resp.json()
      setRestaurant(json[0])
      setName(json[0].restaurant_name)
      setAddress(json[0].restaurant_address)
      setImg(json[0].restaurant_picture)
    }
    getRestaurant()
  }, [])
  return (
    <div className="p-4 flex gap-2 editRestaurantContainer">
      <div className="flex flex-col gap-2 ">
        <div>
          <label className="mr-5" htmlFor="restaurantName">Name: </label>
          <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="restaurantName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="restaurantAddress">Address: </label>
          <input className="ml-2 p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="restaurantAddress" value={address} onChange={(e) => setaddress(e.target.value)} />
        </div>
        <div>
          <label className="mr-5" htmlFor="restaurantImage">Image: </label>
          <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="restaurantImage" value={img} onChange={(e) => setImg(e.target.value)} />
        </div>
        <button onClick={() => editRestaurant()} className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] hover:bg-[#93e2ae] hover:cursor-pointer transition-all">Edit restaurant</button>
        <p className="text-sm">Deleting a restaurant is possible through the control users page.</p>
      </div>
      <div className="flex flex-col gap-2">
        <img className="border-2 rounded-lg border-[#93e2ae]" src={img} alt="restaurant image" />
      </div>
    </div>
  );
}

export default EditRestaurant;
