import React, { useState, useEffect } from "react";

export default function Footer() {
  const [fcontents, setFContents] = useState("");
  useEffect(() => {
    setFContents("This is new footer contents");
  }, []);

  return (
    <>
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div
          className="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © 2020 Copyright:
          <a className="text-body" href="#">
            Kenz Website
          </a>
        </div>
      </footer>
    </>
  );
}
