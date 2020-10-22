import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Picture = ({
  small,
  medium,
  large,
  className,
  alt,
  lazyLoad = false,
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '200px 50px 50px 50px',
  });

  const [smsrc, setSmsrc] = useState(null);
  const [mdsrc, setMdsrc] = useState(null);
  const [lgsrc, setLgsrc] = useState(null);

  useEffect(() => {
    if (lazyLoad) {
      if (inView) {
        setSmsrc(small);
        setMdsrc(medium);
        setLgsrc(large);
      }
    } else {
      setSmsrc(small);
      setMdsrc(medium);
      setLgsrc(large);
    }
  }, [inView, large, lazyLoad, medium, small]);

  return (
    <picture
      ref={ref}
      className={`${className} img cover`}
      key={`${smsrc}_${mdsrc}_banner`}
    >
      <source media="(max-width: 600px)" srcSet={smsrc} />
      <source
        media="(max-width: 900px) and (min-width: 600px)"
        srcSet={mdsrc}
      />
      <source media="(min-width: 900px)" srcSet={lgsrc} />
      <img
        src={smsrc}
        className="img cover"
        alt={alt}
        style={{ transition: 'all .3s ease', background: 'grey' }}
      ></img>
    </picture>
  );
};

export default Picture;
