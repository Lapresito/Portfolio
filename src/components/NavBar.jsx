import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        
        <div>Main
            <Link to={"/main"}></Link>
        </div>
        <div>Projects</div>
        <div>Contact</div>
    </div>
    
  )
}

export default NavBar