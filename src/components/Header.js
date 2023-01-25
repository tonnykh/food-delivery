import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdOutlineLocalOffer,
  MdHelpOutline,
  MdOutlinePerson,
  MdOutlineShoppingCart,
} from 'react-icons/md';

function Title() {
  return <h1>Food Villa</h1>;
}

function Header() {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    setIsLogin(!isLogin);
  };

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
            <button type="button" onClick={handleClick}>
              {isLogin ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
