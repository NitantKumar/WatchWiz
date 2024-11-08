import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[28vh] w-screen aspect-video px-4 absolute text-white p-2 bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold ml-2'>{title}</h1>
            <p className='py-5 text-lg w-1/2 ml-2'>{overview}</p>
            <div className='flex ml-2'>
                <button className='bg-sky-500 text-white px-8 py-4 rounded-lg mr-2 text-lg bg-opacity-75 hover:bg-opacity-100'>
                    <span className='pr-2'>▶️</span>
                    Play
                </button>
                <button className='bg-gray-500 text-white px-8 py-4 rounded-lg mr-2 text-lg bg-opacity-80 flex hover:bg-opacity-100'>
                    <img src="https://img.icons8.com/?size=100&id=77&format=png&color=ffffff" alt="info-logo" width={32} className='pr-2 mt-[1px]'/>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;