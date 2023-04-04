import "./SignUp.css";
import React, {useState} from "react"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UnivRoll, setUnivRoll] = useState("");
  const [Contact, setContact] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className="login">
      <div className="login-child" />
      <b className="nsec">
        <span className="nsec-txt">
          <span>NS</span>
          <span className="e">E</span>
          <span>C</span>
        </span>
      </b>
      <b className="placement">
        <span className="nsec-txt">
          <span>placement</span>
          <span className="e">.</span>
        </span>
      </b>
    
     
      <b className="home"><a href="/">Home</a></b>
      <b className="contact">Contact</b>
      <div className="signup-item" >
       <div className="cont11">
       <img src="images/nsec-logo 1.png" alt="" />
       <div className="text2">
       Ready to take the next step in your career? </div>
       <div className="text2"> <span>Login to your account to</span>
    

      <span> start exploring </span>
      <div className="text2">job opportunities</div>
      </div>
       
       </div>
      <div className="signup-inner" >
      <div className="signup1">SignUp</div>
      <div className="please-enter-your">Please enter your credentials!</div>
      
      
      
      
      

      <form className="signup-form" onSubmit={handleSubmit}>
      <label className="form-label1">
        Email:
        <input
          className="form-input1"
          type="email"
          value={email}
          placeholder="EMAIL"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        Password:
        <input
          className="form-input1"
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        University Roll Number:
        <input
          className="form-input1"
          type="number"
          value={UnivRoll}
          placeholder="University Roll Number"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        Contact Number:
        <input
          className="form-input1"
          type="number"
          value={Contact}
          placeholder="Contact Number"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <button className="form-button1" type="submit">SignUp</button>
    </form>

      
      <div className="not-registered-register-container">
        <span>{`Already have an account? `}</span>
        <b className="register"><a href="/Login">Login</a></b>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
