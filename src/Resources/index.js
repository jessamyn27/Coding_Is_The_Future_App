import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';

const Resources = (props) => (
      <div className='resources-container'>
      <Link className='resources' to='/resources'>resources</Link>
      <a href='https://developer.mozilla.org/en-US/'className='mdn'>mdn web docs</a>

      <a href='https://hackernoon.com/'className='mdn'>hackernoon</a>

      <a href='https://stackoverflow.com/'className='mdn'>stackoverflow</a>

      <a href='https://www.codewars.com/join'className='mdn'>codewars</a>
      <a href='https://www.youtube.com/playlist?list=PL51l5r1uFLPMJ16m-tgi8dgpGCPdV9r9q'className='mdn'>code along with jim</a>

      <a href='https://git.generalassemb.ly/WebDev-Connected-Classroom'className='mdn'>general assembly lessons</a>

      <a href='https://docs.google.com/spreadsheets/d/1sbG6vnw-cx-_FCJfBhfUtjw6OVNwtAL4mey8XpeBLkI/edit#gid=0'className='mdn'>daily lesson links</a>
      </div>
    )

  export default Resources;

// https://developer.mozilla.org/en-US/
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
