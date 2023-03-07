import React from 'react'
import {Link , NavLink} from "react-router-dom"

function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <header>
    <Link to="/" className="logo">#VANLIFE</Link>
    <nav>
      <NavLink
         to="host"
         style={({isActive}) => isActive ? activeStyle : null}
         >
          Host
      </NavLink>
      <NavLink
         to="about"
         style={({isActive}) => isActive ? activeStyle : null}
         >
          About
      </NavLink>
      <NavLink
         to="vans"
         style={({isActive}) => isActive ? activeStyle : null}
         >
          Vans
      </NavLink>
    </nav>
  </header>
  )
}

export default Header