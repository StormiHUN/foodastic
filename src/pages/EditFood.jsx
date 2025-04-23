import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UrlContext } from "../App";
function EditFood() {

  const navigate = useNavigate()
  const turl = useContext(UrlContext)
  const url = turl.url
  const { id } = useParams()
  const [food, setFood] = useState({})
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")

  async function editFood() {
    const resp = await fetch(url + "/food/" + food.food_id,{
      method: "PUT",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        name: name,
        price: price,
        image: img
      })
    })
    const json = await resp.json()
    if(json.status == "OK"){
      alert("Food data has been modified!")
    }
  }

  async function deleteFood() {
    const resp = await fetch(url + "/food/" + food.food_id,{
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
    })
    const json = await resp.json()
    if(json.status == "OK") alert("Food deleted")
    else if(json.error) alert("Error: " + json.error)
  }

  useEffect(() => {
    async function getFood() {
      const resp = await fetch(url + "/food/" + id)
      const json = await resp.json()
      setFood(json[0])
      setName(json[0].name)
      setPrice(json[0].price)
      setImg(json[0].image)
    }
    getFood()
  }, [])
  return (
    <div className="p-4 flex gap-2 editFoodContainer">
      <div className="flex flex-col gap-2 ">
        <div>
          <label htmlFor="foodName">Name: </label>
          <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="foodName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="foodPrice">Price: </label>
          <input className="ml-2 p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="number" id="foodPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="foodName">Image: </label>
          <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="foodName" value={img} onChange={(e) => setImg(e.target.value)} />
        </div>
        <button onClick={() => editFood()} className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] hover:bg-[#93e2ae] hover:cursor-pointer transition-all">Edit food</button>
        <button onClick={() => deleteFood()} className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] hover:bg-[#93e2ae] hover:cursor-pointer transition-all">Delete food</button>
      </div>
      <div className="flex flex-col gap-2">
        <img className="border-2 rounded-lg border-[#93e2ae]" src={food.image} alt="food image" />
      </div>
    </div>
  );
}

export default EditFood;
