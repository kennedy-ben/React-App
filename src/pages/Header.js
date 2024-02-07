import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <span className="slogan">WELCOME</span>
      </div>
      <div className="header-right">
        <a href="/User">User</a>
        <a href="/Album">Album</a>
        <a href="/Photo">Photo</a>
      </div>
    </div>
  );
}

export default Header;
