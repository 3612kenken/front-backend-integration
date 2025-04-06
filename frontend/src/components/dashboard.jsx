import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <div class="container">
        <h3>Kenneth Omiping's Dashboard</h3>
        <p>
          A navigation bar is a navigation header that is placed at the top of
          the page.
        </p>
      </div>
      <Footer />
    </>
  );
}
