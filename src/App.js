import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Login/Login";
import Home from "./Home/Home";
import Common from "./Student/Common/Common"
import SignUp from "./SignUp/SignUp"
import SHome from "./Student/SHome/SHome";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element= {<Login/>} />
      <Route path="/SignUp" element= {<SignUp/>} />
      <Route path="/Common" element= {<Common/>} >
           <Route path="/Common/SHome" element= {<SHome/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
