import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Service from '../../components/Services';
import Man from '../../assets/Man.png';
import congregation from '../../assets/Congregation.jpg';
import ArrowRight from '../../assets/Icons/ArrowRight';
import BlogCard from '../../components/BlogCard';
import './style.scss';
import { Link } from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <section className='homepage'>
        <Banner caption='Welcome' isHome={true} />

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
          <h2>Discovery The To Christ</h2>
        </section>
      </section>
    );
  }
}
