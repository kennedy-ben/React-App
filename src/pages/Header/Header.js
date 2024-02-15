// Header.js
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header-left">
        <span className="slogan">WELCOME</span>
      </div>
      <div className="header-right">
        {/* <a href="/state">Users</a>
        <a href="/Albums">Albums</a>
        <a href="/Photo">Photos</a> */}
        <Link to="/state">Users</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/photo">Photos</Link>
        <button className="header-link" onClick={handleLogout}>
          Logout
        </button>{" "}
      </div>
    </div>
  );
};
