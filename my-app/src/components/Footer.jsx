import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Sahil Mahajan ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
