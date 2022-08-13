import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://twitter.com/mustaphachqoub1' target='_blank'>
          <div>
              <BsTwitter />
          </div>
        </a>

        <a href='https://web.facebook.com/mustapha.chqoubi.7/' target='_blank'>
          <div>
              <FaFacebookF />
          </div>
        </a>
        
        <a href='https://www.instagram.com/chqoubi.official/' target='_blank'>
          <div>
              <BsInstagram />
          </div>
        </a>

        <a href='https://github.com/mustaphachqoubi' target='_blank'>
          <div>
            <BsGithub />
          </div>
        </a>

        <a href='https://www.linkedin.com/in/mustapha-chqoubi/' target='_blank'>
          <div>
            <BsLinkedin />
          </div>
        </a>

    </div>
  )
}

export default SocialMedia