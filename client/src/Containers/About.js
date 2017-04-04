import React from 'react';
import Story from '../Views/StoryComponent';
import Info  from '../Views/InfoComponent';

var About = function () {
  return (
    <div className='myAboutContainer'>
    <div className='AboutHeader'>
      <h1> <strong> <em> About </em> </strong> </h1>
    </div>
      <Story />
      <Info />
    </div>
  )
}

export default About;
