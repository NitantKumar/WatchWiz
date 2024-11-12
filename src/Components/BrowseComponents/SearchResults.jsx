import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../utils/constants';

const SearchResults = () => {
    const isLoading = useSelector((store) => store.search.isSearchResultsLoading);
    const error = useSelector((store) => store.search.searchResultError);
    const result = useSelector((store) => store.search.searchResults); 

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span className="text-rose-500">Error: {error}</span>;
    }

    if (result.length === 0) {
        return <></>; 
    }

    if (result.length === 0) {
        return <span className="text-rose-500">No results found.</span>;
    }

    return (
        <div>
            {result.map((item) => (
                <div
                    key={item.id}
                    className="flex bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 mx-5 my-3"
                >
                    {item.poster_path ? (
                        <img
                            src={IMG_CDN_URL + item.poster_path}
                            alt={item.title}
                            className="w-36 h-full object-cover"
                        />
                    ) : (<></>)}
                    <div className="p-4 flex flex-col justify-between">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-300 mb-2">{item.release_date}</p>
                        <p className="text-gray-200 mb-2">{item.overview}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-400 font-bold mr-2">Rating:</span>
                            <span className="text-gray-300">{item.vote_average} / 10</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-300">{item.vote_count} votes</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
