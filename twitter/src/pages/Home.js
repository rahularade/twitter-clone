import React from 'react'
import Widgets from './Widgets/Widgets'
import Sidebar from './Sidebar/Sidebar'
import {Outlet, useNavigate} from "react-router-dom"
import { useUserauth } from '../context/Userauthcontext'
import "./pages.css"

const Home = () => {
  const {logout, user} = useUserauth()
  const navigate = useNavigate();
  // const user = {
  //   displayname: "Bit Head",
  //   email: "bithead@gmail.com"
  // }

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user}/>
      <Outlet/>
      <Widgets/>
    </div>
  )
}

export default Home
