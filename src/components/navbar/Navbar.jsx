import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="Logo">
        <a>
          <img className="img-logo" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <Link to={`/`} className="link">
          Home
        </Link>
        <Link to={`login/`} className="link">
          Login
        </Link>
        <Link to={`playlist`} className="link">
          My Playlist
        </Link>
        <Link to={`settings`} className="link">
          Settings
        </Link>
        <Link to={`aboutus`} className="link">
          About us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
