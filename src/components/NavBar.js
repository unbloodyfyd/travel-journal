import React from "react";
import logo from "../images/logo.png"


export default function Navbar() {
  return (
      <nav>
        <img src={logo} className="img-logo"/>
        <p className="nav-text">my travel journal</p>
      </nav>
  )
}