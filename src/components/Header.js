import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

function Title() {
  return (
    <h1 className="text-3xl text-gray-dark">
      <Link to={'/'}>Food Villa</Link>
    </h1>
  );
}

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, 'CarTA');

  const [isLogin, setIsLogin] = useState(true);
  const cart = useContext(CartContext);
  const productsCount = cart?.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const { user } = useContext(UserContext);
  console.log(user, 'USER');

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
          <li className="flex items-center gap-2">
            <Link to="/help">Help</Link>
          </li>
          <li className="flex items-center gap-2">Sign In</li>
          <li className="flex items-center gap-2">
            <Link to="/cart">
              <button>Cart items -{cartItems.length}</button>
            </Link>
          </li>
          {user.name}
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
