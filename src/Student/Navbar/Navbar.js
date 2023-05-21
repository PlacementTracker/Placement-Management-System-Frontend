import React from 'react'
import "./Navbar.css"
import { useUserContext } from "./../../Context/UserContext";
import {Outlet,Link} from 'react-router-dom'

function Navbar() {
  const { logOut } = useUserContext();
  return (
    <>
    <div className="navi">
    <div className="ansec">
    <span className="ansec-txt">
      <span>NS</span>
      <span className="E">E</span>
      <span>C</span>
    </span>
    </div>
    <div className="links">
         <a href="/Common" className="hom">Home</a>
         <a href="/Common" className="Com">Community</a>
         <button onClick={logOut}  className="logout"><Link to="/Login">LogOut</Link></button>
    </div>


    
  </div>

  </>
  )
}

export default Navbar
