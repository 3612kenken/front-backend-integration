import React, { useEffect, useState } from "react";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Kenz Website
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Proifile</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
