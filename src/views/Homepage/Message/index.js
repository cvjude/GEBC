import React, { useRef } from 'react';
import Image from '../../../components/Image';
import pastor from '../../../assets/pastor.png';
import Modal from '../../../components/Modal';
import './style.scss';

const Message = () => {
  const modal = useRef();

  const open = () => {
    modal.current.open();
  };

  return (
    <>
      <section className="ms_ps">
        <Modal ref={modal}>
          <div className="ms_modal ms_ps_con container flex-row card var">
            <div className="text-sec flex-col j-space al-start">
              <p>
                Our current Church focus is the Great Commandment and the Great
                Commission. These two challenges are ever before the body of
                Christ (the Church) and have to do with the primary reason for
                the Church’s life and being. Here, we are constantly reminded of
                our relationship to God, each other and the un-churched: Love
                God, Love of Each Other and Love for Others, especially the
                lost. It all starts with our Love for God. “Love God,” our focal
                passages are: Matthew 22: 36 – 40 and Mark 12: 28 – 31. These
                scriptures give us the Great Commandment. “2Thou shalt love the
                Lord thy God with all thy heart, and with all thy soul, and with
                all thy mind. This is the first and great commandment.” (Matthew
                22: 37 -38) “The first of all the commandments is: Hear, O
                Israel; the Lord our God is one Lord: And thou shalt love the
                Lord thy God with all thy heart, and with all thy soul, and with
                all thy mind, and with all thy strength: this is the first
                commandment... There is none greater...” (Mark 12: 29 – 30, 31b)
                These passages address the totality of our being and should be
                studied, reflected upon, prayed about and meditated upon so that
                it will be an on-going enhancement in the practical aspects of
                our lives. Do we really love God as much as we say we do?
              </p>
              <p>
                Our second focus is Love Each Other, and the focal scripture is
                John 13: 34 – 35. “A new commandment I give unto you, That ye
                love one another; as I have loved you, that ye also love one
                another. By this shall all men know that ye are my disciples, if
                you have love one to another.” (John 13: 34 – 35) Love for each
                other, saints, is our badge of discipleship. The Lord says, “By
                this shall all men know that ye are my disciples, if you have
                love one to another.” The question each of us can and should ask
                ourselves is how does my badge of discipleship look? I would
                suspect all of us, or rather each of us, could work on our badge
                of discipleship that is work on our love to each other.
              </p>
              <p>
                Our third focus is Love for Others, especially the un-churched,
                the unsaved - Matthew 28: 18 – 20. This passage tells us the
                business of the Church, what we should be about and how we
                should be about the work of the Church, not “Church work” but
                the work of the Church. This is the Great Commission of the
                Church and we are to be about this mission at home and abroad,
                in all the world, “teaching all nations, baptizing them in the
                name of the Father, and of the Son, and of the Holy Ghost:
                teaching them to observe all things whatsoever I have commanded
                you: ...” (Matthew 28: 19 – 20)
              </p>
            </div>
          </div>
        </Modal>
        <div className="ms_ps_con container flex-row card var">
          <div className="text-sec flex-col j-space al-start">
            <h1>Message from Our Pastor</h1>
            <div>
              <p>
                Our current Church focus is the Great Commandment and the Great
                Commission. These two challenges are ever before the body of
                Christ (the Church) and have to do with the primary reason for
                the Church’s life and being. Here, we are constantly reminded of
                our relationship to God, each other and the un-churched: Love
                God, Love of Each Other and Love for Others, especially the
                lost. It all starts with our Love for God. “Love God,” our focal
                passages are: Matthew 22: 36 – 40 and Mark 12: 28 – 31.
              </p>
              <span onClick={open}>Expand</span>
            </div>
          </div>
          <div className="img-sec flex-col">
            <div className="pic">
              <Image
                imgClass="img contain"
                image={pastor}
                lazyLoad={true}
                usePlaceHolder={true}
              />
            </div>
            <div className="nm_plt">
              <h3>Anthony Oluwaremilekun</h3>
              <p>Church Pastor</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
