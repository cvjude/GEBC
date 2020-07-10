import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Larrow from '../../assets/icons/ArrowLeft';
import myList from '../../data/corevalues';
import './style.scss';

const ValueCard = ({ data }) => (
  <div className='core_cards flex-col al-start'>
    <div className='img_sec'>
      <img src={data.icon} alt='' className='img contain' />
    </div>
    <div className='text-sec'>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  </div>
);

const CoreValues = () => {
  let element;

  return (
    <section className='cr_vals'>
      <h1 className='hd'>Our Core Calues</h1>
      <p className='s_hd hdx'>
        Supporting our adopted Mission Statement, the goals of Gbagada Estate
        Baptist Church will comprise:
      </p>

      <div className='carousel_sec flex-row j-end'>
        <div className='btns flex-row j-space'>
          <button
            className='l_arrow flex-row'
            onClick={() => element.slideNext()}
          >
            <Larrow />
          </button>
          <button
            className='r_arrow flex-row'
            onClick={() => element.slideNext()}
          >
            <Larrow />
          </button>
        </div>

        <AliceCarousel
          items={myList.map((listItem, i) => (
            <ValueCard data={listItem} key={`gebc_corev_${i}`} />
          ))}
          responsive={{
            450: { items: 1 },
            800: { items: 2 },
            1200: { items: 3 },
            1400: { items: 4 },
          }}
          ref={(el) => (element = el)}
          touchTrackingEnabled={true}
          dotsDisabled={true}
          buttonsDisabled={true}
        />
      </div>
    </section>
  );
};

export default CoreValues;
