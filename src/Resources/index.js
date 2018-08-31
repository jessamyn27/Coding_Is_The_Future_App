import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';

const Resources = (props) => (
      <div className='resources-container'>
      <Link className='resources' to='/resources'>resources</Link>
      <Link className='mdn' to={'https://developer.mozilla.org/en-US/'}>MDN web docs</Link>

      </div>
    )

  export default Resources;

// https://developer.mozilla.org/en-US/
