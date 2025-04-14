import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Restaurant from "../components/Restaurant"
import { UrlContext } from '../App'
const Restaurants = () => {
  
  const turl = useContext(UrlContext)
    const url = turl.url

  const [restaurants, setRestaurants] = useState([{
    restaurant_adress: "anyád hihi",
    restaurant_picture: "https://placehold.co/450x300"
  }])

  useEffect(() => {
    const getRestaurants = async () => {
      const resp = await fetch(url+"/restaurants")
      const json = await resp.json()
      setRestaurants(json)
    }
    getRestaurants()
  },[])

  return (
    <div className='flex justify-center overflow-x-hidden'>
      <div className='w-fit h-fit p-2'>
        {restaurants.map((item, i) => <Restaurant key={"d"+i} item={item}/>)}
      </div>
    </div>
  )
}

export default Restaurants
