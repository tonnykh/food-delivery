import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="header-container">
        <Title />

        <ul className="navbar">
          <li>
            <Link to="/offers">
              <MdOutlineLocalOffer />
              Offers
            </Link>
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
      </div>
    </header>
  );
};

export default Header;
