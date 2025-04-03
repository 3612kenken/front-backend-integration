import React, { useState, useEffect } from "react";

export default function Footer() {
  const [fcontents, setFContents] = useState("");
  useEffect(() => {
    setFContents("This is new footer contents");
  }, []);

  return (
    <>
      <div className="card">
        <h3>{fcontents}</h3>
      </div>
    </>
  );
}
