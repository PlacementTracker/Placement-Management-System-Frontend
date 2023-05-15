import React from 'react'
import "./Navb.css"
function Navb() {
  return (
    
      <div className="navi">
        <div className="ansec">
        <span className="ansec-txt">
          <span>NS</span>
          <span className="E">E</span>
          <span>C</span>
        </span>
        </div>
        <div className="links">
             <a href="/ACommon" className="hom">Home</a>
             <a href="/ACommon" className="Com">Community</a>
             <a href="/ACommon" className="logout">LogOut</a>
        </div>

    
        
      </div>
    
  )
}

export default Navb
