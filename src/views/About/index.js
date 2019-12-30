import React, { Component } from 'react';
import Banner from '../../components/Banner';
import whoWeAre from '../../assets/Who We Are.png';
import man from '../../assets/Image 02.png';
import './style.scss';

export default class index extends Component {
  render() {
    return (
      <main className='about'>
        <Banner imgSrc={whoWeAre} />

        <section className='container short-desc'>
          <p className='text-left'>
            Gbagada Estate Baptist Church, Gbagada is a local church body that
            is impacting the nation, Nigeria in mission and evangelism! You are
            important, no matter who you are, no matter how much you earn! You
            are important to God and you are important to this church!
          </p>
        </section>

        <section className='container flex-full mission'>
          <div className='text-sec flex-full-col jus-center text-left'>
            <div>
              <h2 className='color-theme'>Mission Statement</h2>
              <p>
                Under the inspiration and guidance of the Holy Spirit, we the
                Gbagada Estate Baptist Church, Gbagada have congregated as
                immersed believers to fulfill our assignment in "The Great
                Commission" of Jesus Christ - to share the Good News with every
                person. We do this through Christ-centered, Bible-based worship,
                evangelism, discipleship, ministry, missions, and fellowship
              </p>
            </div>
            <div>
              <h2 className='color-theme'>Vision Statement</h2>
              <p>
                To be a Christ-centered church that addresses the needs of the
                total person
              </p>
            </div>
          </div>
          <div className='img-sec'>
            <img src={man} alt='' />
          </div>
        </section>
      </main>
    );
  }
}
