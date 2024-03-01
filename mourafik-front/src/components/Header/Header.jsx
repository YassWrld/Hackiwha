import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <a href="" className="root-link">
          MOURAFIK.
        </a>
        <ul className="navigation">
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
        <div className="btn">
          <button className="btn-login">LogIn</button>
          <button className="btn-join">Join Us</button>
        </div>
      </nav>
    </header>
  );
}
