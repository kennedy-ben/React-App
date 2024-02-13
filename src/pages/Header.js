// Header.js
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

function Header() {
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
        <a href="/state">Users</a>
        <a href="/Album/:albumId">Albums</a>
        <a href="/Photo">Photos</a>
        <button className="header-link" onClick={handleLogout}>Logout</button>      </div>
    </div>
  );
}

export default Header;
