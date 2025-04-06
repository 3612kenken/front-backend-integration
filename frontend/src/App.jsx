import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav /> {/* Include your navigation component */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
