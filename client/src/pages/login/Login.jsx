import "./Login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="lcontainer">
      <div className="lheader">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="linputs">
          <div className="linput">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Enter UserName"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="linput">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={handleChange}
              className="linput"
            />
          </div>
          <div className="submit-container">
            <div className="submit" disabled={loading} onClick={handleClick}>
              Login
            </div>
          </div>
        </div>
        <div className="forgot-password">
          Don't have an account? &nbsp;{" "}
          <span onClick={() => navigate("/register")}>Click Here</span>
        </div>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
