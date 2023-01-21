import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchTxt, handleSearch, setSearchTxt }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant.."
          value={searchTxt}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
