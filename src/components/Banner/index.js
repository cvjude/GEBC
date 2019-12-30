import React, { Component } from 'react';
import bannerimg from '../../assets/Image 01.png';
import Typee from '../../components/react-typee-text';
import './style.scss';

class Banner extends Component {
  state = {
    unmount: false
  };

  componentWillUnmount() {
    this.setState({ unmount: true });
  }

  render() {
    const { caption, isHome = false } = this.props;
    return (
      <section className='banner'>
        <div className='image-section'>
          <img src={bannerimg} alt='' />
        </div>
        <div className='content'>
          <h2>{caption}</h2>
          {isHome ? (
            <h4>
              We are{' '}
              <strong>
                <Typee
                  text={['Great!', 'Energetic!', 'Belivers!']}
                  play={true}
                  period={0}
                  style={{ color: 'white' }}
                  unmount={this.state.unmount}
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
