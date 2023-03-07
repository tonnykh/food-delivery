import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import Search from './Search';
import LocationSideBar from './LocationSideBar';

function Title() {
  return (
    <h1 className="text-3xl text-gray-dark" data-testid="title">
      <Link to={'/'}>Food Villa</Link>
    </h1>
  );
}

function Header() {
  const [searchText, setSearchText] = useState('');
  const [toggleLocationSideBar, setToggleLocationSideBar] = useState(true);

  const locationAddress = useSelector(
    (store) => store.location.locationAddress
  );

  // const latitude = useSelector((store) => store.location.coordinates.latitude);

  // console.log(latitude, 'ADDRESS latitude ');

  // const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems, 'CarTA');

  const cartTotalQuantity = useSelector((store) =>
    store.cart.items.reduce(
      (acc, itemWithQuantity) => acc + itemWithQuantity.quantity,
      0
    )
  );

  console.log(cartTotalQuantity, 'CarTA QUANTITY');

  const [isLogin, setIsLogin] = useState(true);

  const { user } = useContext(UserContext);
  console.log(user, 'USER');

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    setIsLogin(!isLogin);
  };

  console.log(searchText, 'SEARCH TEXT');

  return (
    <header className="header sticky top-0 z-20 border border-gray-lighter bg-gray-semi-transparent backdrop-blur-sm backdrop-saturate-50">
      <div className="header-container my-0 mx-auto flex h-20 max-w-screen-xl items-center justify-between">
        <Title />
        <button onClick={() => setToggleLocationSideBar(true)}>
          {locationAddress ? locationAddress : 'Location'}
        </button>

        {toggleLocationSideBar && (
          <LocationSideBar
            setToggle={() => setToggleLocationSideBar(!toggleLocationSideBar)}
          />
        )}
        <Search searchText={searchText} setSearchText={setSearchText} />

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
              <button data-testid="cart">
                Cart items - {cartTotalQuantity}
              </button>
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
