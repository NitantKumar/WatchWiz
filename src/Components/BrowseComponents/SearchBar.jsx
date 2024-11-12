import React, { useEffect, useState } from 'react';
import useLanguagesandRegions from '../../hooks/useLanguagesandRegions';
import { setSearchResultError, setSearchResults, setSearchResultsLoading } from "../../utils/searchSlice";
import { useDispatch } from "react-redux";
import useDebounce from '../../utils/useDebounce';
import { API_OPTIONS } from '../../utils/constants';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue);
    const [manualSearch, setManualSearch] = useState(false);
    const [includeAdult, setIncludeAdult] = useState(false);
    const { languages, regions } = useLanguagesandRegions();
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedYear, setSelectedYear] = useState('');
    const [formError, setFormError] = useState(null);

    const dispatch = useDispatch(); // Moved dispatch here

    const handleIncludeAdultClick = () => setIncludeAdult(!includeAdult);

    useEffect(() => {
        if (debouncedSearchValue || manualSearch) {
            fetchSearchResults({
                searchQuery: debouncedSearchValue,
                includeAdult,
                selectedLanguage,
                selectedRegion,
                selectedYear,
            });
            setManualSearch(false); // Reset manual search
        }
    }, [debouncedSearchValue, manualSearch, includeAdult, selectedLanguage, selectedRegion, selectedYear]);

    const handleSearchClick = (e) => {
        e.preventDefault();
        searchValue.length < 3 ? displayTemporaryError("Search Query should be at least 3 characters long") : setManualSearch(true);
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        const currentYear = new Date().getFullYear();

        if (value.length <= 4 && /^[0-9]*$/.test(value)) {
            if (parseInt(value) <= currentYear || value === '') {
                setSelectedYear(value);
            } else {
                displayTemporaryError("Please enter a year <= current year.");
            }
        } else {
            displayTemporaryError("Please enter a 4-digit numeric value only.");
        }
    };

    const displayTemporaryError = (message) => {
        setFormError(message);
        setTimeout(() => setFormError(''), 3000);
    };

    const fetchSearchResults = async ({ searchQuery, includeAdult = false, selectedLanguage = null, selectedRegion = null, selectedYear = null }) => {
        dispatch(setSearchResultsLoading(true));
        dispatch(setSearchResultError(null));

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&include_adult=${includeAdult}` +
                `${selectedLanguage ? `&language=${selectedLanguage}` : ''}` +
                `${selectedYear ? `&primary_release_year=${selectedYear}` : ''}` +
                `&page=1${selectedRegion ? `&region=${selectedRegion}` : ''}`,
                API_OPTIONS
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            dispatch(setSearchResults(data.results));
        } catch (err) {
            dispatch(setSearchResultError("Failed to fetch results: " + err.message));
        } finally {
            dispatch(setSearchResultsLoading(false));
        }
    };

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <form className='flex flex-col w-full p-4 mt-20' onSubmit={handleSearchClick}>
                {/* Required Filters */}
                <div className="flex items-center space-x-2 w-full">
                    <h2 className='text-lg font-semibold text-white'>Required Filters:</h2>
                    <input
                        type="text"
                        value={searchValue} // Bind input to state
                        onChange={(e) => setSearchValue(e.target.value)} // Update state on change
                        className="bg-black text-white py-2 px-3 w-[80%] rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-gray-400 text-base"
                        placeholder="What would you like to see today?"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-lg font-semibold text-white bg-sky-600 rounded-md hover:bg-sky-700 transition-all duration-200 ease-in-out"
                    >
                        Search
                    </button>
                </div>

                {/* Optional Filters */}
                <div className="flex items-center space-x-2 mt-4 w-full">
                    <h2 className='text-lg font-semibold text-white'>Optional Filters:</h2>
                    <button
                        type='button'
                        className={`px-4 py-2 text-lg whitespace-nowrap font-semibold text-white ${includeAdult ? "bg-sky-600" : "bg-gray-500"} rounded-md hover:bg-sky-700 transition-all duration-200 ease-in-out`}
                        onClick={handleIncludeAdultClick}
                    >
                        Include Adult
                    </button>
                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="bg-black text-white py-2 px-3 w-[25%] rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 text-base"
                    >
                        <option key='default' value={null}>All Languages</option>
                        {languages && languages.length > 0 ? (
                            languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name || lang.english_name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No languages available</option>
                        )}
                    </select>
                    <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="bg-black text-white py-2 px-3 w-[25%] rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 text-base"
                    >
                        <option value={null}>All Regions</option>
                        {regions && regions.results && regions.results.length > 0 ? (
                            regions.results.map((region) => (
                                <option key={region.iso_3166_1} value={region.iso_3166_1}>
                                    {region.native_name || region.english_name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No regions available</option>
                        )}
                    </select>
                    <input
                        type="text"
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="bg-black text-white py-2 px-3 w-[20%] rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-gray-400 text-base"
                        placeholder="Year"
                        maxLength="4"
                    />
                </div>
            </form>
            {formError && <div className="text-rose-500 text-sm my-2">{formError}</div>}
        </div>
    );
};

export default SearchBar;
