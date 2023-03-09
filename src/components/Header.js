import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';
import LocationSideBar from './LocationSideBar';
import { AiOutlineDown, AiFillGithub } from 'react-icons/ai';

function Logo() {
  return (
    <h1 className="text-3xl text-gray-dark" data-testid="title">
      <Link to={'/'}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          className="h-12"
        ></img>
      </Link>
    </h1>
  );
}

function Header() {
  const [searchText, setSearchText] = useState('');
  const [toggleLocationSideBar, setToggleLocationSideBar] = useState(false);

  const locationAddress = useSelector(
    (store) => store.location.locationAddress
  );

  const cartTotalQuantity = useSelector((store) =>
    store.cart.items.reduce(
      (acc, itemWithQuantity) => acc + itemWithQuantity.quantity,
      0
    )
  );

  return (
    <header className="header sticky top-0 z-20 border border-gray-lighter bg-gray-semi-transparent backdrop-blur-sm backdrop-saturate-50">
      <div className="header-container my-0 mx-auto flex h-20 max-w-screen-xl items-center justify-between">
        <div className="flex gap-12">
          <Logo />
          <button
            onClick={() => setToggleLocationSideBar(true)}
            className="group flex items-center gap-2 text-sm text-gray-light hover:text-gray-dark"
          >
            <span className="font-bold text-gray-dark underline decoration-gray-dark decoration-2 group-hover:text-orange group-hover:decoration-orange">
              Other
            </span>
            {locationAddress ? locationAddress : 'Location'}
            <AiOutlineDown className="font-bold text-orange" />
          </button>
        </div>
        {toggleLocationSideBar && (
          <LocationSideBar
            setToggle={() => setToggleLocationSideBar(!toggleLocationSideBar)}
          />
        )}
        <Search searchText={searchText} setSearchText={setSearchText} />

        <ul className="navbar flex gap-16 text-sm font-bold text-gray-dark">
          <li>
            <Link to={'/'} target="_blank" rel="noopener noreferrer">
              <div className=" group relative">
                <AiFillGithub className="hover:text-gray-700 cursor-pointer text-3xl transition hover:rotate-[360deg]  hover:scale-150 hover:duration-500 hover:ease-in" />
                <span className="bg-gray-600 invisible absolute -right-1/2 -bottom-9 block whitespace-nowrap rounded-md p-2 text-xs text-white opacity-80 group-hover:visible">
                  Created by Tonny kh © 2023
                </span>
              </div>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="/cart">
              <button data-testid="cart" className="text-base">
                <span className="text-green">
                  {cartTotalQuantity > 0 && cartTotalQuantity}
                </span>
                Cart
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
