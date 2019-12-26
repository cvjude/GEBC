import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Menu from '../../assets/Icons/menu';
import logo from '../../assets/Logo.png';
import './style.scss';

const NavBar = () => {
  const currentScroll = useRef();
  const navBar = useRef();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const scroll =
      window.requestAnimationFrame ||
      function(cb) {
        window.setTimeout(cb, 1000 / 60);
      };

    const loop = () => {
      if (currentScroll.current !== window.scrollY) {
        currentScroll.current = window.scrollY;

        if (currentScroll.current > 100) {
          navBar.current.style.top = '-200px';
          navBar.current.classList.add('slide-down');
          if (currentScroll.current > 200) {
            navBar.current.style.top = 0;
          }
        } else {
          navBar.current.classList.remove('slide-down');
          navBar.current.style.top = 'initial';
        }
      }
      scroll(loop);
    };

    loop();
    return () => {};
  }, [currentScroll, navBar]);

  // const handleClick = () => {};

  return (
    <nav className='navbar' ref={navBar}>
      <div className='nav-container container'>
        <Link className='links logo' to='/'>
          <img src={logo} alt='' />
        </Link>

        <div className='nav-icons'>
          <label htmlFor='toggle' style={checked ? { marginRight: '70%' } : {}}>
            <Menu width='30px' height='30px' fill={'white'} />
          </label>

          <input
            type='checkbox'
            id='toggle'
            style={{ display: 'none' }}
            // ref={inputRef}
            // checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <ul className='link-container'>
            <NavLink
              activeClassName='link-active'
              to='/home'
              className='links nav-links'
            >
              Home
            </NavLink>
            <NavLink
              activeClassName='link-active'
              to='/about'
              className='links nav-links'
            >
              About Us
            </NavLink>
            <NavLink
              activeClassName='link-active'
              to='/ministries'
              className='links nav-links'
            >
              Ministries
            </NavLink>
            <NavLink
              activeClassName='link-active'
              to='/blog'
              className='links nav-links'
            >
              Blog
            </NavLink>
            <NavLink
              activeClassName='link-active'
              to='/contact'
              className='links nav-links'
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
