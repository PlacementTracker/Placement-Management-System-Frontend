import React from 'react'
import "./SHome.css"
import { useUserContext } from "./../../Context/UserContext";
const SHome = () => {
  const { user } = useUserContext();
  return (
    <div>
      <div className="welcome"></div>
      Welcome {user.userEmail}
    </div>
  )
}

export default SHome
