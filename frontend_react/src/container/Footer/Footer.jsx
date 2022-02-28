import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrapp, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
            <img src={images.email} alt="email" />
            <a href="mailto:mustaphachqoubi88@gmail.com" className='p-text'>mustaphachqoubi88@gmail.com</a>
        </div>
        <div className='app__footer-card'>
            <img src={images.mobile} alt="mobile" />
            <a href="tel: +212 653214099" className='p-text'>+212 653214099</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
          <div className='app__flex'>
              <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
              <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea 
             className='p-text'
             placeholder='Your Message' 
             value={message} 
             name="message"
             onChange={handleChangeInput} 
             />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{ loading ? 'Sending' : 'Send Message' }</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>
    }
    </>
  )
}

export default AppWrapp(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)