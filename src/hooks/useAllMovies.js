import useNowPlayingMovies from "./useNowPlayingMovies";
import usePopularMovies from "./usePopularMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import useUpcomingMovies from "./useUpcomingMovies";

const useAllMovies = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
}

export default useAllMovies;

