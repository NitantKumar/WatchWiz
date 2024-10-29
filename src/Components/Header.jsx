import React from 'react';
import WatchWiz from '../assets/WatchWiz.png';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full flex items-center p-4 bg-transparent">
      <img src={WatchWiz} alt="Logo" className="" />
    </div>
  );
};

export default Header;
