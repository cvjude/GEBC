import React from 'react';
import { Link } from 'react-router-dom';
import Typee from '../../../components/Typee';
import banner from '../../../assets/homepage/banner.png';
import fb from '../../../assets/icons/facebook.png';
import ig from '../../../assets/icons/instagram.png';
import tw from '../../../assets/icons/twitter.png';
import wh from '../../../assets/icons/whatsapp.png';
import yt from '../../../assets/icons/youtube.png';
import './style.scss';

const links = [
  {
    img: tw,
    link: '',
  },
  {
    img: fb,
    link: '',
  },
  {
    img: yt,
    link: '',
  },
  {
    img: ig,
    link: '',
  },
  {
    img: wh,
    link: '',
  },
];

const Banner = () => {
  return (
    <section className='banner flex-row'>
      <div className='contents container'>
        <div className='text_sec flex-row al-end'>
          <div className='text_con'>
            <p className='top'>WELCOME TO GEBC</p>
            <h1>
              We are{' '}
              <Typee
                text={['Great!', 'Energetic!', 'Believers!']}
                play={true}
                period={500}
              />
            </h1>
          </div>
        </div>
        <div className='img_sec'>
          <img src={banner} alt='' className='img contain' />
        </div>
      </div>
      <aside>
        <div className='sd_br flex-col'>
          <p>Connect</p>
          <span></span>
          <div className='flex-col'>
            {links.map((link, i) => (
              <Link to={link.link} key={`social_link_${i}`}>
                <img src={link.img} alt='' className='img contain' />
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Banner;
