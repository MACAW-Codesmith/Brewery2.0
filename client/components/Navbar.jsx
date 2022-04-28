import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const user = useContext(UserContext).user;
  const setUser = useContext(UserContext).setUser;
  let navigate = useNavigate();
  const handleLogout = () => {
    ``;
    setUser(undefined);
    navigate('/login');
  };
  const handleDelete = () => {
    ``;
    navigate('/deleteUser');
  };
  const handleFavorites = () => {
    ``;
    navigate('/favorites');
  };
  const handleSearch = () => {
    ``;
    navigate('/search');
  };
  return (
    <>
      <header>
        <div className='brand nav'>FindMyBrews&#127867;</div>
        {user && (
          <button className='logout-Btn' onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>
    </>
  );
};
export default Navbar;