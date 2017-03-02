import React from 'react';

var PostsDisplay = function (props) {
  var Posts = [];
  console.log(props.Posts);
  if (props.Posts) {
    Posts = props.Posts.map(function (item) {
      return (
        <div>
          <h1> Author: {item.author.local.username} </h1>
            <h3> Title: {item.title ? item.title : "untitled"} </h3>
              <p> {item.text} </p>
              <p> {item.date} </p>
              <ul>
                {item.comments.map(function (item) {
                  return (<li>{item.text}</li>);
                })}
              </ul>
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
