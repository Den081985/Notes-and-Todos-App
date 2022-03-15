import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand nav-title">Notes&Todos App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/"}>
          Notes
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/todos"}>
          Todos
        </NavLink>
      </li>
    </ul>
  </nav>
);
