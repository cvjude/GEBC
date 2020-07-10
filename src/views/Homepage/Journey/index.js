import React from 'react';
import './style.scss';

const jcx = [
  {
    title: 'Accept that you are a sinner',
    desc: 'Roman 3:23 - For all have sinned and fall short of the glory of God',
  },
  {
    title: 'Accept Christ as your Lord',
    desc: 'John 3:16 - Come to Christ for Life',
  },
  {
    title: 'Join a Fellowship',
    desc: 'Find a bible believing church around you',
  },
];

const Journey = () => {
  return (
    <section className='jcx'>
      <div className='container'>
        <h1 className='hd txt-center'>Discover the Journey to Christ</h1>
        <p className='s_hd hdx'>
          God so loved the world that he gave his one and only Son, that whoever
          believes in him shall not perish but have eternal life. - John 3:16
        </p>

        <div className='cdx flex-row'>
          {jcx.map((jc, i) => (
            <div className='jcx_card' key={`jcx_cards_${i}`}>
              <strong>{`0${i + 1}`}</strong>
              <h2>{jc.title}</h2>
              <p>{jc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
