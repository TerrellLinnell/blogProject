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
        <div className='myContainer'>
          <div className='postsFlexBox'>
            <div className='AuthorBox'>
              <h2 className='Author'>☞{item.author.local.username} </h2>
              <div>
                <Button className='btn btn-primary postUpdateButton btn-xs' onClick={ () => props.UpdateHandler(item._id)}>Update Post</Button>
                <Button className='btn btn-danger postDeleteButton btn-xs' onClick={ () => props.deleteHandler(item._id)}>Delete Post</Button>
              </div>
            </div>
            <div className='PostStoryFlexBox'>
              <h4 className='PostTitle'> <em>{item.title ? item.title : "untitled"}</em> </h4>
              <p className='PostText'> {item.text} </p>
            </div>
            <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
          </div>
              {item.comments.map(function (item) {
                return (
                  <div className='CommentContainer'>
                    <div className='commentAuthorBox'>
                        <h4 className='commentAuthor'> ☞{item.author.local.username} </h4>
                      <div>
                        <Button className='btn btn-primary commentUpdateButton btn-xs' onClick={ () => props.UpdateCommentHandler(item._id)}>Update Comment</Button>
                        <Button className='btn btn-danger commentDeleteButton btn-xs' onClick={ () => props.CommentDeleteHandler(item._id)}>Delete Comment</Button>
                      </div>
                    </div>
                    <div className='commentBodyFlexBox'>
                    <p className='commentText'>{item.text}</p>
                    <p className='PostDate'> <em> Posted on {Moment(item.date).format("MMM Do YYYY")} </em> </p>
                    </div>
                  </div>);
              })}
              <div className='NewCommentFlexBox'>
                <Form className='NewCommentForm'>
                  <textarea className='NewCommentTextArea' rows='3' cols='122' type='text' placeholder='comment' onChange={ (event) => props.onChangeHandler('newCommentText', event.target.value)} />
                  <Button bsStyle='success' className='CommentButton' onClick={ () => props.CommentOnClickHandler(item._id)} > post comment </Button>
                </Form>
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
