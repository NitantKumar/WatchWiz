import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import movieReducer from "./movieSlice.js"
import searchReducer from "./searchSlice.js"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieReducer,
            search: searchReducer,
        }
    }
);

export default appStore;