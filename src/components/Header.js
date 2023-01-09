import React from "react";

const Title = () => (
    <h1>Food Villa</h1>
)

const Header = () => {
    return (
      <header className="header">
        <Title />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </header>
    );
}

export default Header;