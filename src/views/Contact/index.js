import React, { Component } from 'react';
import Banner from '../../components/Banner';
import './style.scss';

export default class index extends Component {
  render() {
    return (
      <main className='contact'>
        <Banner caption='Connect !' />

        <section className='container flex-full main'>
          <div className='text-sec'>
            <p className='text-left' style={{ marginBottom: '20px' }}>
              Please contact us using this form if you have any questions or
              comments
            </p>
            <p className='text-left'>
              17, Baptist Church Street, Gbagada Estate Phase 2, Gbagada, Lagos{' '}
            </p>
            <p className='text-left' style={{ marginTop: '20px' }}>
              +234 802 737 5656
            </p>
            <p className='text-left'> gebcgbagada@yahoo.com</p>
          </div>
          <form className='flex-full-col'>
            <input placeholder='Email Address/Name' />
            <input placeholder='Subject' />
            <textarea placeholder='Inquiry or Comments' />
            <button>SUBMIT</button>
          </form>
        </section>
      </main>
    );
  }
}
