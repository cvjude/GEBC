import React from 'react';
import Image from '../../../components/Image';
import g_1 from '../../../assets/homepage/g_1.png';
import g_2 from '../../../assets/homepage/g_2.png';
import g_3 from '../../../assets/homepage/g_3.png';
import g_4 from '../../../assets/homepage/g_4.png';
import g_5 from '../../../assets/homepage/g_5.png';
import g_6 from '../../../assets/homepage/g_6.png';
import g_7 from '../../../assets/homepage/g_7.png';
import './style.scss';

const imgs = [g_1, g_2, g_3, g_4, g_5, g_6, g_7];

const Pictures = () => {
  return (
    <section className='g_pic'>
      <h1 className='hd txt-center'>Church in pictures</h1>
      <p className='s_hd hdx mx-auto txt-center'>
        Have a glimpse of what our worship service looks like
      </p>
      <div className='container g_pic-con'>
        {imgs.map((img, i) => (
          <div className='img_sec' key={`g_images_${i}`}>
            <Image
              image={img}
              imgClass='img cover'
              usePlaceHolder={true}
              lazyLoad={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pictures;
