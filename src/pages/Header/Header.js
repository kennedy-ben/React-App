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
    <div className="header" data-testid="header-component">
      <div className="header-left">
        <span className="slogan">WELCOME</span>
      </div>
      <div className="header-right">
        <Link data-testid="users-link" to="/state">
          Users
        </Link>
        <Link data-testid="albums-link" to="/albums">
          Albums
        </Link>
        <Link  data-testid="photo-link" to="/photo">Photos</Link>
        <button className="header-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
