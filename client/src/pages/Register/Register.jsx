import {
  faCity,
  faEnvelope,
  faGlobe,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", {
        username,
        email,
        password,
        country,
        city,
        phone,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="rcontainer">
      <div className="rheader">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="rinputs">
          <div className="rinput">
            <FontAwesomeIcon icon={faUser} />
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="rinput">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="rinput">
            <FontAwesomeIcon icon={faLock} />
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="rinput">
            <FontAwesomeIcon icon={faGlobe} />
            <input
              id="country"
              onChange={(e) => setCountry(e.target.value)}
              type="country"
              placeholder="Country"
            />
          </div>
          <div className="rinput">
            <FontAwesomeIcon icon={faCity} />
            <input
              id="city"
              onChange={(e) => setCity(e.target.value)}
              type="city"
              placeholder="City"
            />
          </div>
          <div className="rinput">
            <FontAwesomeIcon icon={faPhone} />
            <input
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Phone"
            />
          </div>
          <div className="submit-container">
            <div className="submit" onClick={handleClick}>
              Sign Up
            </div>
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};
export default Register;
