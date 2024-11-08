import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';

const VideoBackground = ({ id }) => {
    useMovieTrailer(id);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    return (
        <div>
            <iframe 
                className='w-screen aspect-video'
                // width="560" height="315" 
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1"} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground