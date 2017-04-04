import React from 'react';
import BlogForm from '../Views/BlogForm';
import $ from 'jquery';
import PostsDisplay from '../Views/PostsDisplay';

var Blog = React.createClass ({
  getInitialState: function () {
    return ({
      author:         null,
      title:          null,
      text:           null,
      comments:       null,
      newCommentText: null,
      postDate:       null,
      commentDate:    null,
      posts:          null
    });
  },
  componentWillMount: function () {
    this.Posts();
  },
  onChangeHandler: function (field, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
},
  onClickHandler: function () {
      $.ajax({
        url:    '/api/posts',
        method: 'POST',
        data:   this.state
      }).done(function (data) {
        console.log(data);
        window.location='/#/blog'
      })
  },
  CommentOnClickHandler: function (id) {
      $.ajax({
        url:    '/api/posts/' + id + '/comments',
        method: 'POST',
        data:   {text: this.state.newCommentText}
      }).done(function (data) {
        console.log(data);
        window.location='/#/blog'
      })
  },
  CommentDeleteHandler: function (id) {
    $.ajax({
      url:    '/api/posts/comments/' + id,
      method: 'DELETE'
    }).done(function (data) {
      console.log(data);
    })
  },
  deleteHandler: function (id) {
    $.ajax({
      url:    '/api/posts/' +id,
      method: 'DELETE'
    }).done(function (data) {
      console.log(data);
    })
  },
  UpdateHandler: function (id) {
    window.location='/#/UpdatePostContainer/' + id;
  },
  UpdateCommentHandler: function (id) {
    window.location='/#/UpdateCommentContainer/' +id;
  },
  Posts: function () {
    var self = this;
    $.ajax({
      url:    '/api/posts',
      method: 'GET',
    }).done(function (data) {
      self.setState({posts: data})
    })
  },
  render: function () {
    return (
      <div className="container">
        <BlogForm onChangeHandler={this.onChangeHandler} onClickHandler={this.onClickHandler} />
        <PostsDisplay onChangeHandler={this.onChangeHandler} UpdateCommentHandler={this.UpdateCommentHandler} CommentDeleteHandler={this.CommentDeleteHandler} CommentOnClickHandler={this.CommentOnClickHandler} Posts={this.state.posts} deleteHandler={this.deleteHandler} UpdateHandler={this.UpdateHandler}/>
      </div>
    );
  }
});

export default Blog;
