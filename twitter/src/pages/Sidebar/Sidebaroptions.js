import React from 'react'
import './Sidebaroptions.css'
const Sidebaroptions = ({active, Icon, text}) => {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroptions