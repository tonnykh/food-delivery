import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
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
  const cart = useContext(CartContext);
  const productsCount = cart?.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  
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
            <button>
              <MdOutlineShoppingCart />
              Cart ({productsCount} items)
            </button>
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
