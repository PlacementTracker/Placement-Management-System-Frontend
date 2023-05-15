import { createContext, useContext, useState ,useEffect} from "react";

export const adminContext = createContext({
  adminEmail: null,
  logIn: () => {},
  logOut: () => {},
  
});

const ADMIN = { adminEmail: "Guest", isGuestUser: true };

export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(()=>{
    const localdata=localStorage.getItem('admin');
    return localdata?JSON.parse(localdata):ADMIN;
  }
 
  );
  
  function logIn(adminEmail) {
    setAdmin({ isGuestUser: false, adminEmail: adminEmail });
 
  }
 
  useEffect(()=>{
    localStorage.setItem('admin',JSON.stringify(admin))
  },[admin]
  )
  function logOut() {
    setAdmin(ADMIN);
  };
 
  return (
    <adminContext.Provider value={{ admin, logIn, logOut }}>
      {children}
    </adminContext.Provider>
  );
}

export function useAdminContext() {
  const { admin, logIn, logOut} = useContext(adminContext);

  return { admin, logIn, logOut};
}