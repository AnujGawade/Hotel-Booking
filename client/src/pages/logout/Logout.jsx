import React from "react";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  // const { user } = useContext(AuthContext);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="logout">
      {user ? (
        <Link onClick={logOut} className="navLButton">
          Logout
        </Link>
      ) : null}
    </div>
  );
};

export default Logout;
