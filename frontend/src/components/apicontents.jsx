import React, { useState, useEffect } from "react";

export default function ApiContents() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/test")
      .then((response) => response.json())
      .then((data) => {
        setContents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <>
      <div>
        <h2>This is api from backend.</h2>

        {
          //'map' is same as loop to retrieve data
        }
        {contents.map((content) => (
          <div key={content.id}>
            <p>{content.text}</p>
            <p>{content.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}
