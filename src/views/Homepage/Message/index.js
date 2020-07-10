import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image';
import pastor from '../../../assets/pastor.png';
import './style.scss';

const Message = () => {
  return (
    <section className='ms_ps'>
      <div className='ms_ps_con container flex-row card var'>
        <div className='text-sec flex-col j-space al-start'>
          <h1>Message from Our Pastor</h1>
          <div>
            <p>
              Our current Church focus is the Great Commandment and the Great
              Commission. These two challenges are ever before the body of
              Christ (the Church) and have to do with the primary reason for the
              Church’s life and being. Here, we are constantly reminded of our
              relationship to God, each other and the un-churched: Love God,
              Love of Each Other and Love for Others, especially the lost. It
              all starts with our Love for God. “Love God,” our focal passages
              are: Matthew 22: 36 – 40 and Mark 12: 28 – 31.
            </p>
            <Link to=''>Expand</Link>
          </div>
        </div>
        <div className='img-sec flex-col'>
          <div className='pic'>
            <Image
              imgClass='img contain'
              image={pastor}
              lazyLoad={true}
              usePlaceHolder={true}
            />
          </div>
          <div className='nm_plt'>
            <h3>Anthony Oluwaremilekun</h3>
            <p>Church Pastor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
