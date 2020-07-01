import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hambuger from '../../assets/icons/Hambuger';
import './style.scss';

const links = [
  { title: 'About', link: '/about' },
  { title: 'Ministries', link: '/ministries' },
  { title: 'Membership', link: '/membership' },
  {
    title: 'Resources',
    link: '/resources',
    menus: [
      {
        title: 'Blog',
        link: '/blog',
      },
    ],
  },
  { title: 'Contact us', link: '/contact us' },
];

const NavBar = () => {
  const [checked, setChecked] = useState(false);

  const onClick = (e, prevent) => {
    if (prevent) {
      e.preventDefault();
      e.target.nextElementSibling.classList.toggle('op-dp_223');
    }
  };

  return (
    <>
      <nav className='main-nav container flex-row'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' className='img contain' />
        </Link>
        <div className='nav-collapse flex-row j-end'>
          <label className='burger' htmlFor='input-nav'>
            <Hambuger width='20px' height='20px' open={checked} />
          </label>

          <input
            type='checkbox'
            id='input-nav'
            value={checked}
            onChange={() => setChecked(!checked)}
          />

          <div className='contents flex-row j-end'>
            <div className='l_s'>
              {links.map((link, i) => (
                <div className='lin_con' key={`sublink_${i}`}>
                  <NavLink
                    to={link.link}
                    className={`links${link.className || ''}`}
                    activeClassName='link_active'
                    onClick={(e) => onClick(e, !!link.menus)}
                    as='div'
                  >
                    {link.title}
                  </NavLink>
                  {link.menus
                    ? link.menus.map((menu, i) => (
                        <div
                          className='dropDown'
                          key={`drop-down_${link.title}`}
                        >
                          <NavLink to={menu.link}>{menu.title}</NavLink>
                        </div>
                      ))
                    : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
