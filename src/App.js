import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Login/Login";
import Home from "./Home/Home";
import Common from "./Student/Common/Common"
import SignUp from "./SignUp/SignUp"
import SHome from "./Student/SHome/SHome";
import ALogin from "./Admin/ALogin/ALogin";
import ACommon from "./Admin/ACommon/ACommon";
import AHome from "./Admin/AHome/AHome";
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
      <Route path="/ALogin" element= {<ALogin/>} />
      <Route path="/ACommon" element= {<ACommon/>} >
            <Route path="/ACommon/AHome" element= {<AHome/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
