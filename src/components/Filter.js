import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Filter = ({setRestaurants}) => {
  const {user, setUser} = useContext(UserContext);
    return (
      <div className="filter-container sticky top-20 flex h-16 items-center border border-gray-lighter	bg-white	shadow-sm">
        <div className="filter-category my-0 mx-auto flex max-w-6xl items-center gap-12">
          <p className="text-sm text-gray-light">Relevance</p>
          <p className="text-sm text-gray-light">Delivery Time</p>
          <p className="text-sm text-gray-light">Rating</p>
          <p className="text-sm text-gray-light">Cost: Low to High</p>
          <p onClick={() => setRestaurants()} className="text-sm text-gray-light cursor-pointer">Cost: High to Low</p>
          <div className="filter-sub-category flex items-center gap-1">
            <p>Filters</p>
          </div>
        </div>
        <input onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
            // email: "new@email.com"
          })} type="text" value={user.name} className="bg-gray-lighter" />
      </div>
    );
}

export default Filter;