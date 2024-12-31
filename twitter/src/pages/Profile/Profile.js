import React from 'react'
import Mainprofile from './Mainprofile/Mainprofile'
import '../pages.css'
import { useUserauth } from "../../context/Userauthcontext";


const Profile = () => {
  const {user} = useUserauth()
  
  // const user = {
  //   displayname: "Bit Head",
  //   email: "bithead@gmail.com"
  // }
  return (
    <div className="profilePage"><Mainprofile user={user}/></div>
  )
}

export default Profile