import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    
      <div className="navi">
        <div className="nsec">
        <span className="nsec-txt">
          <span>NS</span>
          <span className="e">E</span>
          <span>C</span>
        </span>
        </div>
        <div className="links">
             <a href="/Common" className="hom">Home</a>
             <a href="/Common" className="Com">Community</a>
             <a href="/Common" className="logout">LogOut</a>
        </div>

    
        
      </div>
    
  )
}

export default Navbar
