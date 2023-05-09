import "./Common.css";
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom";

const Common = () => {
  return (
    <>
    <div className="main">
        <Navbar/>

    <div className="sidebar">
        <div className="side-links">
            <a href="/Common/SHome" className="dlinks">Dashboard</a>
            <a href="/Common" className="dlinks">Profile</a>
            <a href="" className="dlinks">Active Drives</a>
            <a href="" className="dlinks">Interview Experiences</a>
            <a href="" className="dlinks">Community </a>
            
        </div>
      
    </div>
    </div>
    <Outlet/>
    </>

  );
};

export default Common;
