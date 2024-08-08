import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertySearch = ({ searchKeyword, setSearchKeyword, onSearch }) => {
  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="pl-0.5 flex items-center w-96 rounded-md border-1 border-slate-300 md:w-[700px]">
      <input type="text" className="flex-1 p-2 text-sm md:p-2.5 md:text-base"
             placeholder="Search properties" value={searchKeyword} onChange={handleInputChange} />

        <button onClick={handleSearchClick} 
                className="bg-blue-700 p-2.5 rounded-md text-sm text-white cursor-pointer flex items-center  hover:bg-slate-700 md:p-2.5 md:text-base">
          Search <FaSearch className='ml-1.5' />
        </button>
      </div>
    </div>
  );
}

export default PropertySearch;
