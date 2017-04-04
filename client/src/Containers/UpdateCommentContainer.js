import React from 'react';
import $ from 'jquery';
import UpdateCommentForm from '../Views/UpdateCommentForm';

var UpdateCommentContainer = React.createClass({
  getInitialState: function () {
    return (
      {
        text: null
      }
    );
  },
  componentWillMount: function () {
    this.getCommentById();
  },
  getCommentById: function () {
    var that = this;
    $.ajax({
      url:    '/api/posts/comments/' + this.props.params.commentId,
      method: 'GET'
    }).done(function (data) {
      console.log(data);
      that.setState(data);
    })
  },
  onChangeHandler: function (field, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  CommentOnClickHandler: function () {
      $.ajax({
        url:    '/api/posts/comments/' + this.props.params.commentId,
        method: 'PUT',
        data:   this.state
      }).done(function (data) {
        console.log(data);
        window.location='/#/blog'
      })
    },
  onClickHandler: function functionName() {
    var that = this;
    $.ajax({
      url:    '/api/posts/comments/' + this.props.params.commentId,
      method: "PUT",
      data:   this.state
    }).done(function () {
      console.log("Updated comment with id: " + that.props.params.commentId );
      window.location='/#/blog'
    })
  },
  render: function () {
    return(
      <div>
        <UpdateCommentForm CommentOnClickHandler={this.CommentOnClickHandler} text={this.state.text} onClickHandler={this.onClickHandler} onChangeHandler={this.onChangeHandler}/>
      </div>
    );
  }
})

export default UpdateCommentContainer;
