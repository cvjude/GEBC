import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Service from '../../components/Services';
import Man from '../../assets/Man.png';
import welcome from '../../assets/Welcome.png';
import congregation from '../../assets/Congregation.jpg';
import ArrowRight from '../../assets/Icons/ArrowRight';
import BlogCard from '../../components/BlogCard';
import './style.scss';
import { Link } from 'react-router-dom';

export default class index extends Component {
  state = {
    unmount: false
  };

  componentWillUnmount() {
    this.setState({ unmount: true });
  }

  render() {
    return (
      <section className='homepage'>
        <Banner imgSrc={welcome} isHome={true} unmount={this.state.unmount} />

        <section className='learn-us'>
          <div className='flex-full text-container'>
            <div className='text-sec'>
              <h2>
                We see the <span className='color-theme'>Possibilities</span>
              </h2>
              <h2>
                We smell the <span className='color-theme'>Success</span>
              </h2>
              <h2>
                We taste the <span className='color-theme'>Results</span>
              </h2>

              <Link className='links learn' to='/about'>
                Learn more about us <ArrowRight width='60px' height='30px' />
              </Link>
            </div>
          </div>
          <div className='image-sec'>
            <img className='object-cover' src={Man} alt='' />
          </div>
        </section>

        <section className='church-desc'>
          <div className='image-sec'>
            <img className='object-cover' src={congregation} alt='' />
          </div>
          <div className='flex-full text-sec'>
            <h4>
              Gbagada Estate Baptist Church, Gbagada is a local church body that
              is impacting the nation. You are important, no matter who you are,
              no matter how much you earn! You are important to God and you are
              important to this church!
            </h4>
          </div>
        </section>

        <Service />

        <section className=' blog-section'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>

        <section className='journey'>
          <h2 className='header'>Discovery The Journey To Christ</h2>
          <div className='content'>
            <p>
              God so loved the world that he gave his one and only Son, that
              whoever believes in him shall not perish but have eternal life.
            </p>
            <p>- John 3:16</p>
          </div>
          <div className='journey-cards'>
            <div className='box right'>
              <div className='content'>
                <h2>Accept that you are a sinner</h2>
                <p>
                  Roman 3:23 - For all have sinned and fall short of the glory
                  of God
                </p>
              </div>
              <div className='border'></div>
            </div>
            <div className='box left'>
              <div className='content'>
                <h2>Accept Christ as your Lord</h2>
                <p>John 3:16 - Come to Christ for Life</p>
              </div>
              <div className='border'></div>
            </div>
            <div className='box right'>
              <div className='content'>
                <h2>Join a Fellowship</h2>
                <p>Find a bible believing church around you</p>
              </div>
              <div className='border'></div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
