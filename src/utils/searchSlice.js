import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearchPage: false,
        isSearchResultsLoading: false,
        searchResultError: null,
        searchResults: []
    },
    reducers: {
        toggleShowSearchPage: (state, action) => {
            state.showSearchPage = !state.showSearchPage;
        },
        setSearchResultsLoading: (state, action) => {
            if (typeof (action.payload) === 'boolean') {
                state.isSearchResultsLoading = action.payload;
            } else {
                state.isSearchResultsLoading = !state.isSearchResultsLoading;
            }
            state.searchResultError = null;
        },
        setSearchResultError: (state, action) => {
            state.searchResultError = action.payload;
            state.isSearchResultsLoading = false;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
            state.isSearchResultsLoading = false;
            state.searchResultError = null;
        }
    }
});

export const { toggleShowSearchPage, setSearchResultsLoading, setSearchResultError, setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;