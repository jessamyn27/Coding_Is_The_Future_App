import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = (props) => (
      <div className='welcome-container'>
      <Link className='test' to='/flashcard'>test your knowledge</Link>
      <Link className='make' to='/todo'>make a list</Link>
      {/* <Link className='check' to='/resources'>check out these resources</Link> */}
      </div>
    )

  export default Welcome;

<Link to='/profile'>My Profile</Link>
