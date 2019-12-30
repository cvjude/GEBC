import React, { Component } from 'react';
import bannerimg from '../../assets/Image 01.png';
import Typee from '../../components/react-typee-text';
import './style.scss';

class Banner extends Component {
  render() {
    const { caption, isHome = false, unmount, imgSrc } = this.props;
    return (
      <section className='banner'>
        <div className='image-section'>
          <img src={bannerimg} alt='' />
        </div>
        <div className='content'>
          {imgSrc ? (
            <div className='imgCaption'>
              <img src={imgSrc} alt='' />
            </div>
          ) : (
            <h2>{caption}</h2>
          )}
          {isHome ? (
            <h4>
              We are{' '}
              <strong>
                <Typee
                  text={['Great!', 'Energetic!', 'Believers!']}
                  play={true}
                  period={0}
                  unmount={unmount}
                  style={{ color: 'white' }}
                />
              </strong>
            </h4>
          ) : null}
        </div>
      </section>
    );
  }
}
export default Banner;
