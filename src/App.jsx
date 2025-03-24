import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Layout from "./Layout"
import Restaurants from "./pages/Restaurants"
import Checkout from "./pages/Checkout"
import { useState, createContext } from "react"
import { useContext } from "react"

function App() {
  

  const [cart, setCart] = useState([])
  const [refresh, setRefresh] = useState(0)
  const CartContext = useContext(cart)


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { path: '', element: <Home /> }, 
        { path: '/menu', element: <Menu cart={cart} setCart={setCart} setRefresh={setRefresh} refresh={refresh}/> },
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
