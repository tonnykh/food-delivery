import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Title() {
  return <h1 className="text-3xl text-gray-dark">Food Villa</h1>;
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
    <header className="header sticky top-0 z-20 border border-gray-lighter bg-gray-semi-transparent backdrop-blur-sm backdrop-saturate-50">
      <div className="header-container my-0 mx-auto flex h-20 max-w-screen-xl items-center justify-between">
        <Title />

        <ul className="navbar flex gap-16 text-sm font-bold text-gray-dark">
          <li className="flex items-center gap-2">
            <Link to="/offers">Offers</Link>
          </li>
          <li className="flex items-center gap-2">Help</li>
          <li className="flex items-center gap-2">Sign In</li>
          <li className="flex items-center gap-2">
            <button>Cart ({productsCount} items)</button>
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
