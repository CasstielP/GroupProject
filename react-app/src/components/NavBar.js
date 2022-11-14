
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from './images/robinhood__logo.png'
import * as sessionActions from '../store/session'
import './NavBar.css'

const NavBar = () => {

  const user = useSelector(state => state.session.user);

  if (!user) {
    return (
      <div className='header__wrapper'>
        <div className='header__left'>
          <div className='header__name'>Robinhold</div>
          <img className='header__logo' src={Logo} alt='logo' />
        </div>
        <div className='header__right'>
          <NavLink className='header__button' to='/login' exact={true} activeClassName='active'>
            Log in
          </NavLink>
          <NavLink className='header__button' to='/sign-up' exact={true} activeClassName='active'>
            Sign up
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div className='header__wrapper'>
      <div className='navbar__left'>
        <div className='header__name'>Robinhold</div>
        <img className='header__logo' src={Logo} alt='logo' />
      </div>
      <div className='navbar__right'>
        <NavLink className='navbar_link' to='/' exact={true} activeClassName='active'>
          Portfolio
        </NavLink>
        <NavLink className='navbar_link' to='/watchlists' exact={true} activeClassName='active'>
          Watchlists
        </NavLink>
        <NavLink className='navbar_link' to='/account' exact={true} activeClassName='active'>
          Account
        </NavLink>
        <NavLink className='navbar_link' to='/' exact={true} activeClassName='active'>
          SomethingElse
        </NavLink>
        <div className='navbar_link'>
          <LogoutButton />
        </div>

      </div>


    </div>
  );
}

export default NavBar;
