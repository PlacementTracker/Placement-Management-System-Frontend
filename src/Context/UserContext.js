import { createContext, useContext, useState ,useEffect} from "react";

export const userContext = createContext({
  userEmail: null,
  logIn: () => {},
  logOut: () => {},
  
});

const USER = { userEmail: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(()=>{
    const localdata=localStorage.getItem('user');
    return localdata?JSON.parse(localdata):USER;
  }
 
  );
  
  function logIn(userEmail) {
    setUser({ isGuestUser: false, userEmail: userEmail });
 
  }
 
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user))
  },[user]
  )
  function logOut() {
    setUser(USER);
  };
 
  return (
    <userContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, logIn, logOut} = useContext(userContext);

  return { user, logIn, logOut};
}