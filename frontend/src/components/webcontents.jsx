import React, { useState } from "react";

export default function WebContents() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is a paragraph from react.</h1>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </>
  );
}
