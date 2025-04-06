import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Nav from "./nav";

export default function Profile() {
  return (
    <>
      <Nav />
      <div className="container">
        <h3>Profile</h3>
        <p>This is Kenneth Omiping's profile page.</p>
      </div>
      <Footer />
    </>
  );
}
