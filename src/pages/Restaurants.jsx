import React from 'react'
import { useState, useEffect } from 'react'
import Restaurant from "../components/Restaurant"

const Restaurants = () => {
  
  const url = "http://10.201.2.13:88"

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
