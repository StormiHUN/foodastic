import React from 'react'
import { CartContext } from '../App'
import { useContext } from 'react'
import Arrow from "../assets/arrow.svg"
import TrashCan from "../assets/trash.svg"
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { UrlContext } from '../App'
const Checkout = () => {
    const {cart, setCart} = useContext(CartContext)
    const {user, setUser} = useContext(UserContext)
    const turl = useContext(UrlContext)
      const url = turl.url
    const navigate = useNavigate()

    function changeSize(index,change){
        if(cart[index].size + change == 0 || cart[index].size + change == 100) return
        cart[index].size += change
        setCart([...cart])
    }

    function deleteFromCart(index){
        cart.splice(index,1)
        setCart([...cart])
    }

    async function chooseRestaurant() {
        if(user == undefined){
            alert("You need to be logged in to use this feature!")
        }else{
            navigate("/chooserestaurant")
        }
    }


    return (
        <div className='bg-white border-6 border-[#93e2ae] rounded-lg mx-auto p-4'>
            <h2 className='text-3xl mb-2'>Checkout</h2>
            <hr className='mb-4' />
            {cart.length > 0 ? 
            <div>
            {cart.map((x,i) => <div className='flex justify-between align-middle mb-4 checkoutItem' key={i}><p className='text-2xl mr-40'>{x.data.name}</p>  <div className='flex'><div className='flex border rounded-full'><button onClick={() => changeSize(i,-1)} className='border-r rounded-full'><img className='rotate-180' src={Arrow} /></button><p className='text-2xl mt-1 min-w-8'>{x.size}</p><button onClick={() => changeSize(i,1)} className='border-l rounded-full'><img src={Arrow} /></button></div> <button onClick={() => deleteFromCart(i)} className='p-2'><img src={TrashCan} /></button></div></div>)}

            <button onClick={() => chooseRestaurant()} className='text-2xl'>Choose restaurant</button>
            </div>
            : <p>Your cart is empty!</p>}
        </div>
    )
}

export default Checkout