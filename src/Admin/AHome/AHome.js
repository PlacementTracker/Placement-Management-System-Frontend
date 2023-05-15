import React from 'react'
import './AHome.css'
import { useAdminContext } from "../../Context/AdminContext";
const AHome = () => {
  
  const { admin } = useAdminContext();

  return (
    <div className=' Ahome' >
      Hello {admin.adminEmail}
    </div>
  )
}

export default AHome
