import React from 'react';
import Moment from 'moment';
import { Form, Button } from 'react-bootstrap';

var PostsDisplay = function (props) {
  var Posts = [];
  console.log(props.Posts);
  if (props.Posts) {
    Posts = props.Posts.map(function (item) {
      console.log(Moment(item.date));
      return (
        <div>
          <div className='myContainer row'>
            <h2 className='Author'>☞{item.author.local.username} <Button className='btn btn-primary postUpdateButton btn-sm' onClick={ () => props.UpdateHandler(item._id)}>Update Post</Button> <Button className='btn btn-danger postDeleteButton btn-sm' onClick={ () => props.deleteHandler(item._id)}>Delete Post</Button> </h2>
            <h4 className='PostTitle'> <em>{item.title ? item.title : "untitled"}</em> </h4>
            <p className='PostText'> {item.text} </p>
            <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
          </div>
          <div>
              {item.comments.map(function (item) {
                return (
                  <div className='CommentContainer row'>
                    <h4 className='commentAuthor'> ☞{item.author.local.username} <Button className='btn btn-primary postUpdateButton btn-xs' onClick={ () => props.UpdateCommentHandler(item._id)}>Update Comment</Button> <Button className='btn btn-danger postDeleteButton btn-xs' onClick={ () => props.CommentDeleteHandler(item._id)}>Delete Comment</Button></h4>
                    <p className='PostText'>{item.text}</p>
                    <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
                  </div>);
              })}
              <div className='commentForm'>
                <Form>
                  <textarea rows='3' cols='139' type='text' placeholder='comment' onChange={ (event) => props.onChangeHandler('newCommentText', event.target.value)} />
                </Form>
              <Button bsStyle='success' className='CommentButton' onClick={ () => props.CommentOnClickHandler(item._id)} > post comment </Button>
              </div>
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
