import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import Image from '../../../components/Image';
import data from '../../../data/posibilities';
import inchurch from '../../../assets/homepage/inchurch.png';
import Larrow from '../../../assets/icons/ArrowLeft';
import Rarrow from '../../../assets/icons/ArrowRight';
import './style.scss';

const Message = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [length] = useState(data.length);

  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (!inView) return;
    let interval;
    interval = setInterval(() => {
      setCurrentSection((currentSection + 1) % length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSection, inView, length]);

  const handleClick = (position) => {
    const factor = position === 'right' ? 1 : -1;
    setCurrentSection(Math.abs((currentSection + factor) % length));
  };

  return (
    <section className="ps_sl" ref={ref}>
      <div className="ps_sl_con flex-row al-start j-end card var">
        <div className="text-sec flex-col al-start">
          <TransitionGroup className="conts">
            <CSSTransition
              timeout={500}
              classNames="slide"
              key={`flag_content_${currentSection}`}
            >
              <div className="slide">
                <h1>{data[currentSection].title}</h1>
                <p>{data[currentSection].desc}</p>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className="btns flex-row j-space">
            <div
              className="btn_icon flex-row"
              onClick={() => handleClick('left')}
            >
              <Larrow />
            </div>
            <div
              className="btn_icon flex-row"
              onClick={() => handleClick('right')}
            >
              <Rarrow />
            </div>
          </div>
        </div>
        <div className="img-sec flex-col">
          <Image
            imgClass="img cover"
            image={inchurch}
            lazyLoad={true}
            usePlaceHolder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Message;
