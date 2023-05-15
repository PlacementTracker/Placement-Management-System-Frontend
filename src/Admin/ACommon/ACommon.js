import "./ACommon.css";
import Navb from "../Navb/Navb"
import { Outlet } from "react-router-dom";

const ACommon = () => {
  return (
    <>
    
        <Navb/>
 <div className="main">

    <div className="Sidebar">
        <div className="Side-links">
           
            <a href="/ACommon/AHome" className="Dlinks">Dashboard</a>
             <div className="line"></div>
            
            <a href="/ACommon" className="Dlinks">Student Profile</a>
            <div className="line"></div>
            <a href="" className="Dlinks">Active Drives</a>
            <div className="line"></div>
            <a href="" className="Dlinks">Post Drive</a>
            <div className="line"></div>
            <a href="" className="Dlinks">Announcement </a>
            
        </div>
      
    </div>
    
    <Outlet/>
    </div>
    </>

  );
};

export default ACommon;