import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>
        <p onClick={() => navigate("/")}>Admin Panel</p>
        {user ? (
          <div className="username" onClick={logOut}>
            {user.username}
          </div>
        ) : (
          <div className="navItems">
            {/* <button className="navButton">Sign Up</button> */}
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
