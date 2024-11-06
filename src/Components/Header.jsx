import React from 'react';
import WatchWiz from '../assets/WatchWiz.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error');
    });
    console.log('User signed out');
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full flex justify-between items-center p-4 bg-black bg-opacity-75">
      <img src={WatchWiz} alt="Logo" className="h-10" />
      <button
        onClick={handleSignOut}
        className="px-4 py-2 text-lg font-semibold text-white bg-sky-600 rounded-md hover:bg-sky-700 transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
