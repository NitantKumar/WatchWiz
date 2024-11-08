import React, { useEffect } from 'react';
import WatchWiz from '../assets/WatchWiz.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate('/error');
    });
    console.log('User signed out');
  };
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe();
  }, [])


  return (
    <div className="absolute top-0 left-0 z-10 w-full flex justify-between items-center p-4 bg-transparent">
      <img src={WatchWiz} alt="Logo" className="h-14" />
      {
        user && (<button
          onClick={handleSignOut}
          className="px-4 py-2 text-lg font-semibold text-white bg-sky-600 rounded-md hover:bg-sky-700 transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign Out
        </button>)
      }
    </div>
  );
};

export default Header;
