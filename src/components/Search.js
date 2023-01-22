import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchText, handleSearch, setSearchText }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant.."
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
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
