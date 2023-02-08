import React from 'react';
import { MdSearch } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { handleSearchInput } from '../utils/searchSlice';
import { useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

  const filterSearchText = (input) => {
    dispatch(handleSearchInput(input));
  };

  const searchText = useSelector((store) => store.search.searchInput);

  console.log(searchText, 'SEARCH');

  return (
    <form className="flex">
      <input
        type="text"
        className="search-input w-72 rounded-md bg-blue-light py-3 px-6 text-sm backdrop-blur-sm backdrop-saturate-50 placeholder:text-gray-light"
        placeholder="Search restaurant.."
        value={searchText}
        onChange={(e) => {
          console.log(e.target.value, 'TARGET ON CHANGE');
          filterSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      />
      <div className="search-btn relative right-11 inline-flex items-center p-1 text-xl text-gray-light">
        <MdSearch />
      </div>
    </form>
  );
};

export default Search;
