import React from 'react';
import { Jumbotron } from 'react-bootstrap';

var Home = function (props) {
  return (
    <div>
    <Jumbotron className='myJumbotron'>
      <h1 className='JumbotronText'> Welcome to Blogger! </h1>
    </Jumbotron>
    </div>
  );
};

export default Home;
