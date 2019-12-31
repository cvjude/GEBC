import React from 'react';
import evangelism from '../../../assets/Evangelism.png';
import socailSecurity from '../../../assets/Social Security.png';
import fellowship from '../../../assets/Fellowship.png';
import resources from '../../../assets/Resources.png';
import './style.scss';

const coreInfo = [
  {
    image: evangelism,
    header: 'Evangelism',
    desc:
      'Engaging our members and others in sharing their faith to our neighbors using outreach programs, through worship and through ministry service'
  },
  {
    image: socailSecurity,
    header: 'Social security',
    desc: 'Meeting the needs of our members and our community.'
  },
  {
    image: fellowship,
    header: 'Fellowship',
    desc:
      'Providing a friendly, engaging environment for members, visitors and guests; respecting the sacredness of a sanctuary for worship.'
  },
  {
    image: resources,
    header: 'Resources',
    desc:
      'Facilities and staffing to provide worship, service and missions today and tomorrow.'
  }
];

export default function CoreValues() {
  const coreCard = () =>
    coreInfo.map(core => (
      <div className='core-card'>
        <div className='card-img'>
          <img src={core.image} alt='' />
        </div>
        <h2>{core.header}</h2>
        <p>{core.desc}</p>
      </div>
    ));

  return (
    <section className='core-value'>
      <h2 className='header'>Our Core Values</h2>
      <div className='core-container'>{coreCard()}</div>
    </section>
  );
}
