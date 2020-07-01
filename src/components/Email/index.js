import React, { useRef } from 'react';
import { useToasts } from 'react-toast-notifications';
import useInput from '../../Hooks/useInput';
import { axiosInstance } from '../../helpers';
// import rb_bl from '../../assets/layout/rb_bl.png';
// import v_dots from '../../assets/layout/v_dots.png';
// import send from '../../assets/icons/send.png';
import './style.scss';

const Email = () => {
  const submitButton = useRef();
  const { addToast } = useToasts();

  const [handleSubmit, handleChange, inputTypes] = useInput({
    inputs: {
      email: '',
    },
    submitButton,
    cb: () => {
      axiosInstance.post('/email', inputTypes);
    },
  });

  const submit = (e) => {
    const error = handleSubmit(e);
    if (!error) {
      addToast('Succesfully registered', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  };

  return (
    <div className='email-list flex-row'>
      <div className='container contents'>
        <h1 className='hd txt-center'>Subscribe to our Newsletter</h1>
        <div className='form-sec mx-auto'>
          <form className='form flex-row j-space' onSubmit={submit}>
            <input
              placeholder='Email Address'
              value={inputTypes.email}
              onChange={handleChange}
              name='email'
            />
            <button
              className='form-btn flex-row'
              useBefore={false}
              ref={submitButton}
            >
              <p>Subscribe</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
