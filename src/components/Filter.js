import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';

const Filter = ({ mainCategories, setRestaurants }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(mainCategories, 'FILTER SORTS');

  if (mainCategories === undefined) return;

  return (
    <div className="filter-container sticky top-20 flex h-16 items-center border border-gray-lighter	bg-white	shadow-sm">
      <div className="filter-category my-0 mx-auto flex max-w-6xl items-center gap-12">
        {mainCategories.map((category) => (
          <Link to={category?.key} key={category?.key}>
            <button className="text-sm text-gray-light">
              {category?.title}
            </button>
          </Link>
        ))}

        <div className="filter-sub-category flex items-center gap-1">
          <p>Filters</p>
        </div>
      </div>
      <input
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
            // email: "new@email.com"
          })
        }
        type="text"
        value={user.name}
        className="bg-gray-lighter"
      />
    </div>
  );
};

export default Filter;
