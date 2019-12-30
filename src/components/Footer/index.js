import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import facebook from '../../assets/Facebook.png';
import ig from '../../assets/Instagram.png';
import twitter from '../../assets/Twitter.png';
import './style.scss';

export default function Footer() {
  return (
    <section className='footer'>
      <div className='bout container'>
        <Link className='links logo' to='/'>
          <img src={logo} alt='' />
        </Link>

        <div className='bout-sect'>
          <h2>About Us</h2>
          <p>Gbagada Estate Baptist Church,</p>
          <p>Gbagada is a local church body that is impacting the nation.</p>
        </div>

        <div className='contact'>
          <h2>Connect Us</h2>
          <p>
            17, Baptist Church Street, Gbagada Estate Phase 2, Gbagada, Lagos
          </p>
          <p className='num'>+234 802 737 5656</p>
          <p>gebcgbagada@yahoo.com</p>
        </div>

        <p className='copy-right'>
          &copy; Gbagada Estate Baptist Church. All Rights Reserved
        </p>
        <div className='icon'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/'
          >
            <img src={facebook} alt='' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/'
          >
            <img src={ig} alt='' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/'
          >
            <img src={twitter} alt='' />
          </a>
        </div>
      </div>
    </section>
  );
}
