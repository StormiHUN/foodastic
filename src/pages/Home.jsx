import React from 'react'
import FoodasticText from "/src/assets/foodastic.png"
const Home = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='m-4 p-4 w-[50%] bg-[#93e2ae] grid grid-cols-4 rounded-lg'>
          <div className='p-4 rounded-l-lg col-span-3 border-r-2 border-[#93e2ae] bg-[#E0F8E7]'>
            <h1 className='text-2xl'>About us</h1>
            <hr />
            <p>
              Welcome to Foodastic, where flavor meets speed! Since our inception, we’ve been on a mission to redefine the fast-food experience with a perfect blend of <span className='text-xl font-bold'>taste</span>, <span className='text-xl font-bold'>quality</span>, and <span className='text-xl font-bold'>convenience</span>. Whether you’re looking for a quick bite on the go or a cozy space to savor your favorites, Foodastic is your ultimate destination.
              At Foodastic, we believe fast food should never compromise on quality. That’s why we source only the freshest ingredients and craft each meal with care to ensure every bite is as fantastic as the last. From our <span className='text-xl font-bold'>juicy burgers</span> and <span className='text-xl font-bold'>crispy fries</span> to our <span className='text-xl font-bold'>refreshing shakes</span> and <span className='text-xl font-bold'>vibrant salads</span>, we’ve got something to satisfy every craving.
              With locations nationwide, Foodastic is proud to be a part of your community. We are committed to creating a welcoming space where families, friends, and food lovers of all kinds can come together to share a meal and make memories.
              At the heart of Foodastic is our promise to deliver food that’s fast, fresh, and—most importantly—fantastic. Thank you for choosing us to fuel your day, and we can’t wait to serve you again soon!
            </p>
            <hr />
            <p>Taste, Quality, Convenience - Foodastic</p>
            <hr />
          </div>
          <div className='p-4 rounded-r-lg bg-[#E0F8E7]'>
            <h1 className='text-2xl mb-2' >Opening hours</h1>
            <hr />
            <p>10:00 - 22:00</p>
            <p>Monday - Firday</p>
            <hr />
            <p>08:00 - 00:00</p>
            <p>Saturday</p>
            <hr />
            <p>08:00 - 00:00</p>
            <p>Sunday</p>
            <hr />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <img src={FoodasticText} alt="" />
      </div>
    </div>
  )
}

export default Home
