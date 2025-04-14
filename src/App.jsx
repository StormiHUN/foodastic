import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./Layout";
import Restaurants from "./pages/Restaurants";
import Checkout from "./pages/Checkout";
import { useState, createContext } from "react";
import { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register"
import ProfilePage from "./pages/ProfilePage";
import ChooseRestaurant from "./pages/ChooseRestaurant";
import UserProfilePage from "./pages/RolePages/UserProfilePage";
import AdminProfilePage from "./pages/RolePages/AdminProfilePage";
import RestaurantProfilePage from "./pages/RolePages/RestaurantProfilePage";
import RecentOrders from "./pages/RecentOrders";

export const CartContext = createContext([]);
export const UserContext = createContext([])

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({user_id: 1, first_name: "fname", last_name: "lname", email: "anyd@budos.xd", role: "user"})

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/menu', element: <Menu /> },
        { path: '/restaurants', element: <Restaurants /> },
        { path: '/checkout', element: <Checkout /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/user', element: <ProfilePage /> },
        { path: '/chooserestaurant', element: <ChooseRestaurant /> },
        { path: '/user/user', element: <UserProfilePage /> },
        { path: '/user/admin', element: <AdminProfilePage /> },
        { path: '/user/restaurant', element: <RestaurantProfilePage /> },
        { path: '/recentOrders', element: <RecentOrders /> },
      ],
    },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="bgImage w-screen h-screen">
          <RouterProvider router={router} />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
