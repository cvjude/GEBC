import React from 'react';
import Image from '../../../components/Image';
import lying from '../../../assets/homepage/lying.png';
import mixlr from '../../../assets/homepage/mixlr.png';
import { Link } from 'react-router-dom';
import inchurch from '../../../assets/homepage/inchurch.png';
import f_live from '../../../assets/homepage/f_live.png';
import './style.scss';

const cards = [
  {
    img: lying,
    desc: 'Join our worship service via Mixlr (audio only)',
    link: '',
    icon: mixlr,
  },
  {
    img: inchurch,
    desc: 'Join our worship service via Facebook live (Video and audio)',
    link: '',
    icon: f_live,
  },
];

const Message = () => {
  return (
    <section className='wwu'>
      <div className='container'>
        <h1 className='hd'>Worship Avenue</h1>
        <p className='s_hd'>Fellowship with us on any of these days</p>

        <div className='crds flex-row'>
          <div className='plch flex-row j-start'>
            <div className='date theme flex-row'>
              <p>Sun</p>
            </div>
            <div>
              <p>
                <strong>Celebration Service</strong> 8am & 10am
              </p>
              <p>
                <strong>Sunday School</strong> 9am
              </p>
            </div>
          </div>

          <div className='plch flex-row j-start'>
            <div className='date green flex-row'>
              <p>Wed</p>
            </div>
            <div>
              <p>
                <strong>Moment of Elevation</strong> 6pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='nxt container'>
        <h1 className='hd'>Worship with us</h1>
        <p className='s_hd'>Can't make it to church? Join us online</p>

        <div className='crds flex-row'>
          {cards.map((card, i) => (
            <div className='crd_con' key={`worship_ave_${i}`}>
              <div className='img_sec'>
                <Image
                  imgClass='img cover'
                  image={card.img}
                  lazyLoad={true}
                  usePlaceHolder={true}
                />
              </div>
              <div className='text_sec flex-col'>
                <p>{card.desc}</p>
                <Link to={card.link} className='link_sec flex-row j-space'>
                  <span>
                    Click here to join <strong>{'>'}</strong>{' '}
                  </span>
                  <Image image={card.icon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Message;
