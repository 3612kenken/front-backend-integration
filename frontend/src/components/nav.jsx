import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
import Profile from "./profile";
import About from "./about";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Kenz Website
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
