import React, { useEffect, useState } from 'react'
import Header from './Header'

const Login = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <div className="relative w-full h-screen">
      <Header />
      {/* <img src="https://e0.pxfuel.com/wallpapers/76/421/desktop-wallpaper-movie-collage-movies-collage.jpg" 
            alt="Movie Background"  className='w-max h-max'/> */}
      {/* <img src="https://e0.pxfuel.com/wallpapers/76/421/desktop-wallpaper-movie-collage-movies-collage.jpg"
        alt="Movie Background"
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[0.25]" /> */}
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg"
        alt="Movie Background"
        className="absolute top-0 left-0 w-full h-full object-cover" />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-8 rounded-lg text-white">
        <h1 className='text-3xl px-2 py-4'>{toggleForm ? 'Sign Up' : 'Sign In'}</h1>
        <div className='flex flex-col items-center'>
          {
            toggleForm ? (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-80"
              />
            ) : (<></>)
          }
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-80"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-90"
          />
          <button className="p-2 mt-4 bg-blue-500 rounded-md w-72 hover:bg-blue-600 transition">
            {toggleForm ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
        {
          toggleForm ? (
            <p className='p-2 mt-4 text-gray-300'>
              Already have an account?
              <span className="text-white px-1 hover:underline cursor-pointer" onClick={() => handleToggleForm()}>Sign In.</span>
            </p>
          ) : (<p className='p-2 mt-4 text-gray-300'>
            New to WatchWiz?
            <span className="text-white px-1 hover:underline cursor-pointer" onClick={() => handleToggleForm()}>Sign Up now.</span>
          </p>
          )
        }
      </form>
    </div>
  )
}

export default Login
