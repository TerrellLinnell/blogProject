import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router';
import $ from 'jquery';

var Signup = React.createClass({
  getInitialState: function () {
    return ({
      username: null,
      password: null
    });
  },
  onChangeHandler: function (field, val) {
    var newData = {};
    newData[field] = val;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    $.ajax({
      url:'/signup',
      method:"POST",
      data: this.state
    }).done(function (data) {
      if (data.message) {
        alert(data.message);
        window.location = '/#/signup';
      } else {
        alert('User Registered!');
        window.location = '/#/';
      }
    });
  },
  render: function () {
    return(
      <div>
        <Form>
          <FormControl type='text' placeholder='username' onChange={ (event) => this.onChangeHandler('username', event.target.value)} />
          <FormControl type='text' placeholder='password' onChange={ (event) => this.onChangeHandler('password', event.target.value)} />
        </Form>
        <Button bsStyle='primary' onClick={ () => this.onSubmitHandler()}>Add User</Button>
      </div>
    )
  }
})

export default Signup;
