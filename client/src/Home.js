import React from 'react';
import { Jumbotron } from 'react-bootstrap';

var Home = function (props) {
  return (
    <div>
    <Jumbotron className='myJumbotron'>
      <h1 className='JumbotronText'> Welcome to Blogger! </h1>
    </Jumbotron>
      <div className=' HomeBody'>
        <h3>
          <strong> Welcome to my Blogging app! </strong>
        </h3>
        <h5>
          <strong> This is my first project during my study at <em>Big Sky Code Academy</em>.</strong>
        </h5>
        <h5>
          <strong>It is a blogging website, if you sign up and log in you can post to the blog page and comment on any blog posts!</strong>
        </h5>
        <h5>
          <strong>All you have to do is sign up and sign in, enjoy your stay here at Blogger!</strong>
        </h5>
      </div>
    </div>
  );
};

export default Home;
