import React from 'react'

const Login = () => {
  return (
    <div className='border-6 border-[#93e2ae] rounded-lg p-4 bg-white w-fit mx-auto'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl'>Foodastic</h2>
        <div>
          <p>Taste, quality, convenience</p>
          <hr />
        </div>
        <label htmlFor="email">Email</label>
        <input type="text" defaultValue="fasz" name="" id="email" />
      </div>
    </div>
  )
}

export default Login
