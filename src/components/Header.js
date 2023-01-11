import React from "react";
import {
  MdOutlineLocalOffer,
  MdHelpOutline,
  MdOutlinePerson,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Title = () => <h1>Food Villa</h1>;

const Header = () => {
  return (
    <header className="header">
      <Title />
      <ul className="navbar">
        <li>
          <MdOutlineLocalOffer />
          Offers
        </li>
        <li>
          <MdHelpOutline />
          Help
        </li>
        <li>
          <MdOutlinePerson />
          Sign In
        </li>
        <li>
          <MdOutlineShoppingCart />
          Cart
        </li>
      </ul>
    </header>
  );
};

export default Header;
