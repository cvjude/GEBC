import React from 'react';
import bannerimg from '../../assets/Image 01.png';
import './style.scss';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='image-section'>
        <img src={bannerimg} alt='' />
      </div>
      <div className='content'>
        <h2>Welcome</h2>
        <h4>
          We are <strong>Great!</strong>
        </h4>
      </div>
    </section>
  );
};
export default Banner;
