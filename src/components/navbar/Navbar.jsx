import React from 'react'
import "./navbar.css"
import {IoMdNotifications} from "react-icons/io"
import {TiMessages} from "react-icons/ti"

function navbar() {
  return (
  
    <div className="navbar">
        <span className="log">Notify APP</span>
        <div className="icons">
            <div className="icon">
                <IoMdNotifications size={30}/>
                <TiMessages size={30}/>
                <div className="counter">2</div>
            </div>
        </div>
        </div>
        
  )
}

export default navbar