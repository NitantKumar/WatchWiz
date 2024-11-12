import React from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () => {
    return (
        <div className='bg-gradient-to-b from-gray-900 to-black w-screen min-h-screen flex flex-col items-center p-4 text-white'>
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default Search;