import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <span className="slogan">WELCOME</span>
      </div>
      <div className="header-right">
        <a href="/User">Users</a>
        <a href="/Album/:albumId">Albums</a>
        <a href="/Photo">Photos</a>
      </div>
    </div>
  );
}

export default Header;
