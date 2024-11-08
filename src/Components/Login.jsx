import React, { useEffect, useRef, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import Header from './Header';

const Login = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const nameValue = useRef('');
  const emailValue = useRef('');
  const passwordValue = useRef('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleToggleForm = () => {
    setToggleForm(!toggleForm); 
  };

  const validateFormData = (name = '', email, password) => {
    const namePattern = /^[a-zA-Z\s'-]{2,100}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name && !namePattern.test(name)) {
      return { status: false, message: 'Please provide a proper name.' };
    }

    if (!emailPattern.test(email)) {
      return { status: false, message: 'Please provide a proper email.' };
    }

    if (!passwordPattern.test(password)) {
      return { status: false, message: 'Please provide a proper password.' };
    }

    return { status: true, message: 'Validation successful!' };
  };

  const handleFormSubmit = () => {
    const result = validateFormData(nameValue.current?.value, emailValue.current.value, passwordValue.current.value);
    console.log(result);
    if (!result.status) {
      setErrorMessage(result.message);
      return;
    }
    if (result.status) {
      if (toggleForm) {
        //signup logic
        createUserWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameValue.current.value
            }).then(() => {
              dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName}));
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + ": " + errorMessage);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
          });
      } else {
        //singin logic
        signInWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
          });
      }
    } else {
      return;
    }
  }

  return (
    <div className="relative w-full h-screen">
      <Header/>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg"
        alt="Movie Background"
        className="absolute top-0 left-0 w-full h-full object-cover" />
      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-8 rounded-lg text-white">
        <h1 className='text-3xl px-2 py-4'>{toggleForm ? 'Sign Up' : 'Sign In'}</h1>
        <div className='flex flex-col items-center'>
          {
            toggleForm ? (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-80"
                ref={nameValue}
              />
            ) : (<></>)
          }
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-80"
            ref={emailValue}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-72 rounded-md bg-black bg-opacity-90"
            ref={passwordValue}
          />
          <p className='text-red-500' aria-live='polite'>{errorMessage}</p>
          <button onClick={() => handleFormSubmit()} className="p-2 mt-4 bg-blue-500 rounded-md w-72 hover:bg-blue-600 transition active:translate-y-0.5">
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
