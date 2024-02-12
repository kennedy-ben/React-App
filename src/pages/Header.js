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
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
