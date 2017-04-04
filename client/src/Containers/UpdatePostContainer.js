import React from 'react';
import $ from 'jquery';
import UpdatePostForm from '../Views/UpdatePostForm';

var UpdatePostContainer = React.createClass({
  getInitialState: function () {
    return (
      {
        title: null,
        text:  null
      }
    );
  },
  componentWillMount: function () {
    this.getPostById();
  },
  getPostById: function () {
    var that = this;
    $.ajax({
      url:    '/api/posts/' + this.props.params.postId,
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
  onClickHandler: function functionName() {
    var that = this;
    $.ajax({
      url:    '/api/posts/' + this.props.params.postId,
      method: "PUT",
      data:   this.state
    }).done(function () {
      console.log("Updated post with id: " + that.props.params.postId );
      window.location='/#/blog'

    })
  },
  render: function () {
    return(
      <div>
        <UpdatePostForm title={this.state.title} text={this.state.text} onClickHandler={this.onClickHandler} onChangeHandler={this.onChangeHandler}/>
      </div>
    );
  }
})

export default UpdatePostContainer;
