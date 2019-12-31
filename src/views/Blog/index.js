import React, { Component } from 'react';
import Banner from '../../components/Banner';
import BlogCard from '../../components/BlogCard';
import './style.scss';

export default class index extends Component {
  render() {
    return (
      <main className='blog'>
        <Banner caption='Our Blog!' />

        <div className='blog-section'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </main>
    );
  }
}
