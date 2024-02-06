import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="left">
        {/* <a> Home </a> */}
      </div>
      <div className="left">
      <a href="/User">User</a>
        <a href='/Album'> Album </a>
      </div>
    </div>
  )
}

export default Header;