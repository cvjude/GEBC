import React from 'react';
import time from '../../assets/Time.png';
import world from '../../assets/World.png';
import help from '../../assets/Help.png';
import './style.scss';

const data = [
  {
    image: time,
    header: 'Service Time',
    section1: [
      'Sunday',
      '1st Service (English) - 8am',
      '2st Service (Yoruba) - 10am'
    ],
    section2: ['Wednesday', 'Moment of Elevation - 6pm']
  },
  {
    image: world,
    header: 'Where We Meet',
    section1: [
      '17, Baptist Church Street,',
      'Gbagada Estate Phase 2,',
      'Gbagada, Lagos'
    ]
  },
  {
    image: help,
    header: 'Need Help?',
    section1: ['+234 802 737 5656', 'gebcgbagada@yahoo.com']
  }
];

export default function Services() {
  const ServiceData = () =>
    data.map((service, i) => (
      <div key={i} className='service-card'>
        <div className='img-sec'>
          <img src={service.image} alt='' />
        </div>
        <div className='text-sec'>
          <h4>{service.header}</h4>
          <div>
            {service.section1.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div>
            {service.section2 &&
              service.section2.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    ));

  return (
    <section className='container flex-full church-service'>
      <div className ="church-service-container">
        <ServiceData />
      </div>
    </section>
  );
}
