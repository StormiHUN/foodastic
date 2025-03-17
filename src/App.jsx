import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Layout from "./Layout"
import Restaurants from "./pages/Restaurants"

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { path: '', element: <Home /> }, 
        { path: '/menu', element: <Menu /> },
        { path: '/restaurants', element: <Restaurants /> },
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
