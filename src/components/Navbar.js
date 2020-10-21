import React from "react";
import "./Navbar.css";

function Navbar() {
  const link = "Simpsons Quotes";
  const url = "https://fr.wikipedia.org/wiki/Les_Simpson";

  return (
    <nav className="Navbar">
      <a href={url}>{link}</a>
    </nav>
  );
}

export default Navbar;
