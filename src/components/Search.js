import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ searchText, handleSearch, setSearchText }) => {
  return (
    <div className="search-container bg-white sticky top-20 z-20">
      <form className="absolute -top-[59px] left-[30%] flex">
        <input
          type="text"
          className="search-input bg-blue-light w-72 rounded-md py-3 px-6 text-sm backdrop-blur-sm backdrop-saturate-50 placeholder:text-gray-light"
          placeholder="Search restaurant.."
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn inline-flex text-xl p-1 items-center relative right-11 text-gray-light"
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          <MdSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
