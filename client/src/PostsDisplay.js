import React from 'react';
import Moment from 'moment';

var PostsDisplay = function (props) {
  var Posts = [];
  console.log(props.Posts);
  if (props.Posts) {
    Posts = props.Posts.map(function (item) {
      console.log(Moment(item.date));
      return (
        <div>
          <div className='myContainer row'>
            <h2 className='Author'>☞{item.author.local.username} </h2>
            <h4 className='PostTitle'> <em>{item.title ? item.title : "untitled"}</em> </h4>
            <p className='PostText'> {item.text} </p>
            <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
          </div>
          <div className='CommentContainer'>
              {item.comments.map(function (item) {
                return (
                  <div>
                    <h4 className='commentAuthor'> ☞{item.author.local.username}</h4>
                    <p className='PostText'>{item.text}</p>
                    <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
                  </div>);
              })}
            </div>
        </div>
      );
    });
  } else {
    Posts = null;
  }
  console.log(Posts);
  return (
    <div>
      {Posts}
    </div>
  )
};

export default PostsDisplay;
