import React from 'react'
import Food from '../components/Food'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Egg from "../assets/egg.png"
import Fish from "../assets/fish.png"
import Gluten from "../assets/gluten.png"
import Lactose from "../assets/lactose.png"
import Mollusk from "../assets/mollusk.png"
import Nuts from "../assets/nuts.png"
import Soy from "../assets/soy.png"
import FancyRadio from '../components/FancyRadio'
import { useContext } from 'react'
import { CartContext } from '../App'
import { UrlContext } from '../App'
const Menu = () => {

  const {cart, setCart} = useContext(CartContext)

  const turl = useContext(UrlContext)
  const url = turl.url

  const [foods,setFoods] = useState([
    {
      name: "sajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "bajtsuresz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: true
      }
    }, {
      name: "cajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "dajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "fajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "sajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "sajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "sajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    }, {
      name: "sajtburesz",
      image: "https://placehold.co/300x300",
      price: "1500",
      allergens: {
        gluten: false,
        lactose: true,
        nuts: false,
        mussels: false,
        fish: false,
        egg: true,
        soy: false
      }
    },
  ])


  const [searchName, setSearchName] = useState("")
  const [searchKcalLow, setSearchKcalLow] = useState(0)
  const [searchKcalHigh, setSearchKcalHigh] = useState(0)
  const [gluten, setGluten] = useState(true)
  const [lactose, setLactose] = useState(true)
  const [nuts, setNuts] = useState(true)
  const [mollusk, setMollusk] = useState(true)
  const [fish, setFish] = useState(true)
  const [egg, setEgg] = useState(true)
  const [soy, setSoy] = useState(true)
  //const [refresh, setRefresh] = useState(0)

  function verifyKcal(toCheck, type){
    let NaN = isNaN(parseFloat(toCheck)) && isFinite(toCheck);
    if(NaN){
      if(type == "low") return 0
      else return 999999
    }else return toCheck
  }

  const getFoods = async () => {
    const resp = await fetch(url+"/foods")
    const json = await resp.json()
    setFoods(json)
  }

  async function searchFood() {
    let body = {
      name: searchName,
      minkcal: verifyKcal(searchKcalLow,"low"),
      maxkcal: verifyKcal(searchKcalHigh,"high"),
      allergens: {
        gluten: gluten,
        lactose: lactose,
        nuts: nuts,
        mollusk: mollusk,
        fish: fish,
        egg: egg,
        soy: soy
      }
    }
    if(parseInt(body.minkcal) > parseInt(body.maxkcal)){
      let temp = body.maxkcal
      body.maxkcal = body.minkcal
      body.minkcal = temp
    }

    if(searchName == "" && searchKcalLow == "0" && searchKcalHigh == "0" && gluten && lactose && nuts && mollusk && fish && egg && soy){
      getFoods()
    }else{ 
      const resp = await fetch(url+"/foods?"+ new URLSearchParams({
        name: searchName,
        minkcal: verifyKcal(searchKcalLow,"low"),
        maxkcal: verifyKcal(searchKcalHigh,"high"),
        allergens: JSON.stringify([
          {gluten: gluten},
          {lactose: lactose},
          {nuts: nuts},
          {mollusk: mollusk},
          {fish: fish},
          {egg: egg},
          {soy: soy}
        ])
      }))
      const json = await resp.json()
      if(!json.error){
        console.log(json)
        setFoods(json)
      }
    }
  }

  useEffect(() => {
    searchFood()
  }, [searchName, searchKcalLow, searchKcalHigh, gluten, lactose, nuts, mollusk, fish, egg, soy])

  

  useEffect(() => {
  },[cart])


  return (
    <div className='overflow-x-hidden'>
      <div className='flex justify-center gap-4 searchInterface searchInterfaceCenter'>

        <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4  flex flex-col'>
          <div className='flex gap-2 smallScreenFlexInterface'>
            <input className='p-2 border-2 border-[#93e2ae] rounded-lg' type="text" placeholder='Search food by name' value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <input className='p-2 border-2 border-[#93e2ae] rounded-lg' type="number" placeholder='Low threshold (Kcal)' value={searchKcalLow} onChange={(e) => setSearchKcalLow(e.target.value)} />
            <input className='p-2 border-2 border-[#93e2ae] rounded-lg' type="number" placeholder='High threshold (Kcal)' value={searchKcalHigh} onChange={(e) => setSearchKcalHigh(e.target.value)} />
          </div>
          <div className='mt-2 flex gap-2 smallScreenFlexInterface'>
            <div>
            <p className='text-2xl'>Exclude:</p>

            </div>
            <div className='smallScreenIcons'>

          <FancyRadio control={gluten} setControl={setGluten} image={Gluten}/>
          <FancyRadio control={lactose} setControl={setLactose} image={Lactose}/>
          <FancyRadio control={nuts} setControl={setNuts} image={Nuts}/>
          <FancyRadio control={mollusk} setControl={setMollusk} image={Mollusk}/>
          <FancyRadio control={fish} setControl={setFish} image={Fish}/>
          <FancyRadio control={egg} setControl={setEgg} image={Egg}/>
          <FancyRadio control={soy} setControl={setSoy} image={Soy}/>
            </div>
          </div>
        </div>

        <div className='bg-white border-2 border-[#93e2ae] rounded-lg p-4 w-[14rem] overflow-y-scroll'>
          <div className='flex align-middle justify-center gap-6'>
          <p className='text-2xl'>Cart:</p>
          {cart.length == 0 ? "" : <Link className='mt-auto' to={"/checkout"}>Chekout</Link>}
            
          </div>
          <div className='w-fit justify-start h-20'>
            {
              (cart.length > 0 ? cart.map((item, index) => <p key={"a"+index+item.size+cart.length}>{item.data.name} - {item.size < 10 ? "0"+item.size : item.size}x</p>) : <p>Your cart is empty.</p>)
            }
          </div>
        </div>
      </div>
      <div className='flex justify-center pb-4'>
        <div className=' w-fit h-fit grid grid-cols-4 p-4 gap-4 foodCardGridMd'>
          {foods.map((data,i) => <Food key={"b"+i+data.cost+cart.length} data={data} cart={cart} setCart={setCart} />)}
        </div>
      </div>
    </div>
  )
}

export default Menu
