import React from 'react'
import Header from './Header'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryContainer from './BrowseComponents/SecondaryContainer';
import useAllMovies from '../hooks/useAllMovies';
import { useSelector } from 'react-redux';
import Search from './BrowseComponents/Search';

const Browse = () => {
    const toggleSearchPage = useSelector((store) => store.search.showSearchPage);
    useAllMovies();
    return (
        <>
            <Header />
            {
                toggleSearchPage ? (<Search />) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }
        </>
    )
}

export default Browse