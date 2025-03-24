import React from 'react'
import { useState, useEffect } from 'react'
import Restaurant from "../components/Restaurant"

const Restaurants = () => {
  
  const [restaurants, setRestaurants] = useState([{
    restaurant_adress: "anyád hihi",
    restaurant_picture: "https://placehold.co/450x300"
  }])

  useEffect(() => {
    const getRestaurants = async () => {
      const resp = await fetch("/restaurants")
      const json = await resp.json()
      setRestaurants(json)
    }
    //getRestaurants()
  },[])

  return (
    <div className='flex justify-center'>
      <div className='w-fit'>
        {restaurants.map((item, i) => <Restaurant key={"d"+i} item={item}/>)}
      </div>
    </div>
  )
}

export default Restaurants
