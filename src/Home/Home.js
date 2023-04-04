import "./Home.css"
 
const Home = () => {
  return (
    <div className="desktop-1">
     <nav className="navbar">
      <img src="images/25-years-nsec-logo-3.png" alt="Logo" className="navbar__logo" />
      <h1 className="navbar__title">NSEC PLACEMENT CELL</h1>
      <ul className="navbar__menu">
        <li className="navbar__menuItem"><a href="/">Home</a></li>
        <li className="navbar__menuItem"><a href="/about">About</a></li>
        <li className="navbar__menuItem"><a href="/contact">Contact</a></li>
        <li className="navbar__menuItem"><a href="/login">Login</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Home;
