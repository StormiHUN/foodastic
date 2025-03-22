import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Layout from "./Layout"
import Restaurants from "./pages/Restaurants"
import Checkout from "./pages/Checkout"
import { useState } from "react"

function App() {
  
  const [cart, setCart] = useState([])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { path: '', element: <Home /> }, 
        { path: '/menu', element: <Menu setToBuy={setCart} /> },
        { path: '/restaurants', element: <Restaurants /> },
        { path: '/checkout', element: <Checkout cart={cart} setCart={setCart} /> },
      ],
    },
  ])

  

  return (
    <div className="bgImage w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
