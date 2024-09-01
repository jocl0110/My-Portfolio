import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links">
          <li className="links">
            <a href="#home">HOME</a>
          </li>
          <li className="links">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="links">
            <a href="#about">ABOUT ME</a>
          </li>
          <li className="links">
            <Link to='/send-email'>SEND EMAIL</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
