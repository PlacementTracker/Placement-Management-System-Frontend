import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Login/Login";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element= {<Login/>} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
