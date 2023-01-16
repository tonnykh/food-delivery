import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineLocalOffer,
  MdHelpOutline,
  MdOutlinePerson,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Title = () => <h1>Food Villa</h1>;

const loggedInUser = () => {
  return false;
};

console.log(loggedInUser());

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

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
          <li>
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
