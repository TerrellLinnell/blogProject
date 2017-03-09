import React from 'react';
import Story from './StoryComponent';
import Info from './InfoComponent';

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
