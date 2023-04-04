import "./Login.css";

const Login = () => {
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
      <div className="login-item" />
      <b className="home">Home</b>
      <b className="contact">Contact</b>
      <img className="email-1-icon" alt="" src="/email-1@2x.png" />
      <div className="login-inner" />
      <div className="login1">Login</div>
      <div className="please-enter-your">Please enter your credentials!</div>
      <div className="rectangle-div" />
      <div className="login-child1" />
      <img className="padlock-1-icon" alt="" src="/padlock-1@2x.png" />
      <div className="login-child2" />
      <div className="login2">Login</div>
      <div className="email">Email</div>
      <div className="password">Password</div>
      <img className="email-2-icon" alt="" src="/email-1@2x.png" />
      <div className="not-registered-register-container">
        <span>{`Not registered? `}</span>
        <b className="register">Register</b>
      </div>
    </div>
  );
};

export default Login;
