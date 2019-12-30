import React, { useEffect, useState } from 'react';
import './style.scss';

const AnimateText = ({ text, period, play, unmount, style }) => {
  const [delta, setDelta] = useState(200);
  const [loopNum, setLoopNum] = useState(0);
  const [word, setWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [times, settimes] = useState(null);

  useEffect(() => {
    const inteval = play
      ? setInterval(() => {
          const loop = async () => {
            const i = loopNum % text.length;
            const fullTxt = text[i];

            if (!pause) {
              if (isDeleting) setWord(fullTxt.substring(0, word.length - 1));
              else setWord(fullTxt.substring(0, word.length + 1));
            }

            setDelta(200 - Math.random() * 100);

            if (isDeleting) {
              setDelta(delta / 1.2);
            }

            if (!isDeleting && word === fullTxt) {
              setDelta(period);
              setIsDeleting(true);
              setPause(true);

              const timeout = setTimeout(function() {
                setPause(false);
              }, 1000);
              settimes(timeout);
            } else if (isDeleting && word === '') {
              setIsDeleting(false);
              setLoopNum(loopNum + 1);
              setDelta(500);
            }
          };
          loop();
        }, delta)
      : null;

    return () => {
      clearInterval(inteval);
      if (unmount) clearTimeout(times);
    };
  }, [
    delta,
    isDeleting,
    loopNum,
    pause,
    period,
    play,
    text,
    times,
    unmount,
    word
  ]);

  return play ? (
    <p className='typee' style={style}>
      {word}
      <span className='cursor'></span>
    </p>
  ) : null;
};

export default AnimateText;
