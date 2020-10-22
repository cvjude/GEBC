import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hambuger from '../../assets/icons/Hambuger';
import { useLocation } from 'react-router-dom';
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
        link: '#',
      },
    ],
  },
  { title: 'Contact us', link: '/contact' },
];

const NavBar = ({ slide }) => {
  const [checked, setChecked] = useState(false);
  const { pathname } = useLocation();
  const linkRef = [];

  const onClick = (e, prevent, parent) => {
    if (prevent) {
      parent.focus();

      e.preventDefault();
      e.target.nextElementSibling.classList.toggle('op-dp_223');
    }
  };

  const close = useCallback(() => {
    const openedDrop = document.querySelector('.op-dp_223');
    if (checked || openedDrop) {
      setChecked(false);
      openedDrop && openedDrop.classList.remove('op-dp_223');
    }
  }, [checked]);

  const blurClose = (e, parent) => {
    if (!parent.contains(e.relatedTarget)) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', close);

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, [close]);

  return (
    <>
      <nav className="main-nav container flex-row">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="img contain" />
        </Link>
        <div className="nav-collapse flex-row j-end">
          <label className="burger" htmlFor="input-nav">
            <Hambuger width="20px" height="20px" open={checked} />
          </label>

          <input
            type="checkbox"
            id="input-nav"
            value={checked}
            onChange={() => setChecked(!checked)}
          />

          <div className={`contents flex-row j-end${checked ? ' open' : ''}`}>
            <div
              className={`l_s${
                pathname === '/' ||
                pathname === '/contact' ||
                pathname === '/blog' ||
                slide
                  ? ''
                  : ' white'
              }`}
            >
              {links.map((link, i) => (
                <div
                  className="lin_con"
                  key={`sublink_${i}`}
                  onBlur={(e) => blurClose(e, linkRef[i])}
                  ref={(e) => (linkRef[i] = e)}
                  tabIndex={-1}
                >
                  <NavLink
                    to={link.link}
                    className={`links${link.className || ''}`}
                    activeClassName="link_active"
                    onClick={(e) => onClick(e, !!link.menus, linkRef[i])}
                    as="div"
                  >
                    {link.title}
                  </NavLink>
                  {link.menus
                    ? link.menus.map((menu, i) => (
                        <div
                          className="dropDown"
                          key={`drop-down_${link.title}`}
                        >
                          <NavLink
                            to={menu.link}
                            onClick={close}
                            className="dr-link"
                          >
                            {menu.title}
                          </NavLink>
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
