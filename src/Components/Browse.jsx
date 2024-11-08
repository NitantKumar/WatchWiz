import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryContainer from './BrowseComponents/SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse