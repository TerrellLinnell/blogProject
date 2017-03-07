import React from 'react';
import BlogForm from './BlogForm';
import $ from 'jquery';
import PostsDisplay from './PostsDisplay';

var Blog = React.createClass ({
  getInitialState: function () {
    return ({
      author: null,
      title: null,
      text: null,
      comments: null,
      date: null,
      posts: null
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
        url: '/api/posts',
        method: 'POST',
        data: this.state
      }).done(function (data) {
        console.log(data);
        window.location='/#/blog'
      })
  },
  Posts: function () {
    var self = this;
    $.ajax({
      url:'/api/posts',
      method: 'GET',
    }).done( function (data) {
      self.setState({posts: data})
    })
  },
  render: function () {
    return (
      <div className="container">
        <BlogForm onChangeHandler={this.onChangeHandler} onClickHandler={this.onClickHandler} />
        <PostsDisplay Posts={this.state.posts} />
      </div>
    );
  }
});

export default Blog;
