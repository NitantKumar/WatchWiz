import React from 'react'
import Header from './Header'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryContainer from './BrowseComponents/SecondaryContainer';
import useAllMovies from '../hooks/useAllMovies';

const Browse = () => {
    useAllMovies();
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse