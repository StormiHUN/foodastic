import React from 'react'

const FancyRadio = ({control, setControl, image}) => {
  return (
    <button className={!control ? "w-fit h-fit rounded-full border-2 border-[#93e2ae] bg-[#d6f1df] p-2" : "border-2 border-white w-fit h-fit p-2"} onClick={() => setControl(!control)}>
      <img src={image} />
    </button>
  )
}

export default FancyRadio
