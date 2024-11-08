import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const categories = [
        { key: 'nowPlayingMovies', title: 'Now Playing' },
        { key: 'popularMovies', title: 'Popular' },
        { key: 'topRatedMovies', title: 'Top Rated' },
        { key: 'upcomingMovies', title: 'Upcoming' }
    ];
    return (
        <div className='bg-black text-white'>
            <div className='-mt-48 relative z-10'>
                {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> */}
                {
                    categories.map(({key, title}) => (
                        movies[key]?.length > 0 && (
                            <MovieList key={key} title={title} movies={movies[key]} />
                        )
                    )) 
                }
            </div>
        </div>
    )
}

export default SecondaryContainer;