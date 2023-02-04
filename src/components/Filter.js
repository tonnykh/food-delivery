import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';

const SortBy = ({ title }) => {
  return <p className="text-sm text-gray-light">{title}</p>;
};

const Filter = ({ setRestaurants, sorts,  }) => {
  const { user, setUser } = useContext(UserContext);

  console.log(sorts, 'FILTER SORTS');

  return (
    <div className="filter-container sticky top-20 flex h-16 items-center border border-gray-lighter	bg-white	shadow-sm">
      <div className="filter-category my-0 mx-auto flex max-w-6xl items-center gap-12">
        {sorts.map((sort) => (
          <Link to={sort?.key} key={sort?.key}>
            <SortBy
              title={sort?.title}
             
            />
          </Link>
        ))}

        {/* <Link to="/test">
          <p
            onClick={() => setRestaurants()}
            className="cursor-pointer text-sm text-gray-light"
          >
            Cost: High to Low
          </p>
        </Link> */}
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
