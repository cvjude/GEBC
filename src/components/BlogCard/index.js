import React from 'react';
import img from '../../assets/Image 01.png';
import './style.scss';

export default function BlogCard() {
  return (
    <div className='blog-card'>
      <div>
        <div className='img-sec'>
          <img src={img} alt='' />
        </div>
        <p>December 01, 2019</p>
      </div>
      <div className="content">
        <h2>Living with Others</h2>
        <dt>Author:</dt>
        <dd>Rev'd Tony Oluwaremilekun</dd>
      </div>
    </div>
  );
}
