import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
function Header() {
    return (
        <div>
           <div className="header">
               <Link to="/"></Link>
               <div className="logo">Movie app</div>
               <div className="user-image">
                   {/* <img src={} alt="user" /> */}
               </div>
           </div>
        </div>
    )
}

export default Header
