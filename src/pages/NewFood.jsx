import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UrlContext } from "../App";
import Arrow from "../assets/Arrow.svg"
import Egg from "../assets/egg.png"
import Fish from "../assets/fish.png"
import Gluten from "../assets/gluten.png"
import Lactose from "../assets/lactose.png"
import Mollusk from "../assets/mollusk.png"
import Nuts from "../assets/nuts.png"
import Soy from "../assets/soy.png"
import FancyRadio from '../components/FancyRadio'
import { useEffect } from "react";

function NewFood() {

  const navigate = useNavigate()
  const turl = useContext(UrlContext)
  const url = turl.url
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")
  const [kcal, setKcal] = useState("")
  const [gluten, setGluten] = useState(true)
  const [lactose, setLactose] = useState(true)
  const [nuts, setNuts] = useState(true)
  const [mollusk, setMollusk] = useState(true)
  const [fish, setFish] = useState(true)
  const [egg, setEgg] = useState(true)
  const [soy, setSoy] = useState(true)

  async function newFood() {

    const resp = await fetch(url + "/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        price: price,
        image: img,
        kcal: kcal,
        allergens: JSON.stringify(
          {
            gluten: !gluten,
            lactose: !lactose,
            nuts: !nuts,
            mollusk: !mollusk,
            fish: !fish,
            egg: !egg,
            soy: !soy
          }
        )
      })
    })
    const json = await resp.json()
    console.log(resp)
    if (json.status == "Created") alert("New food made!")
    else if (json.error) alert("Error: " + json.error)
  }

  useEffect(() => {
  }, [])

  return (
    <div className="mx-auto rounded-lg border-2 border-[#93e2ae] w-fit p-4 bg-white ">
      <div className="flex justify-between mb-2">
        <div onClick={() => navigate("/controlFoods")} className="flex gap-1 border-2 border-[#93e2ae] rounded-lg p-4 w-fit hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
          <img className="w-[36px] h-[36px] rotate-180" src={Arrow} />
          <span className="text-xl mt-0.5">Back</span>
        </div>
        <p className="text-2xl">New food</p>
      </div>
      <div className="flex gap-2 editFoodContainer">
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
            <label htmlFor="foodImg">Image: </label>
            <input className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="foodImg" value={img} onChange={(e) => setImg(e.target.value)} />
          </div>
          <div>
            <label htmlFor="foodKcal">Kcal: </label>
            <input className="ml-4 p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] transition-all" type="text" id="foodKcal" value={kcal} onChange={(e) => setKcal(e.target.value)} />
          </div>
          Allergens:
          <div className='smallScreenIcons'>
            <FancyRadio control={gluten} setControl={setGluten} image={Gluten} />
            <FancyRadio control={lactose} setControl={setLactose} image={Lactose} />
            <FancyRadio control={nuts} setControl={setNuts} image={Nuts} />
            <FancyRadio control={mollusk} setControl={setMollusk} image={Mollusk} />
            <FancyRadio control={fish} setControl={setFish} image={Fish} />
            <FancyRadio control={egg} setControl={setEgg} image={Egg} />
            <FancyRadio control={soy} setControl={setSoy} image={Soy} />
          </div>
          <button onClick={() => newFood()} className="p-2 border-2 rounded-lg border-[#93e2ae] hover:border-[#355e3b] hover:bg-[#93e2ae] hover:cursor-pointer transition-all">New food</button>
        </div>
        <div className="flex flex-col gap-2">
          <img className="border-2 rounded-lg border-[#93e2ae] w-[300px] h-[300px]" src={img != "" ? img : ""} alt="food image" />
        </div>
      </div>
    </div>
  );
}

export default NewFood;
