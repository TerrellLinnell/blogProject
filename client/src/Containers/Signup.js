import React from 'react';
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';
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
      <div className='signupContainer'>
        <Form className='SignupForm'>
          <FormGroup>
            <FormControl className='SignupInput' type='text' placeholder='username' onChange={ (event) => this.onChangeHandler('username', event.target.value)} />
          </FormGroup>
          <FormGroup>
            <FormControl className='SignupInput' type='text' placeholder='password' onChange={ (event) => this.onChangeHandler('password', event.target.value)} />
          </FormGroup>
        </Form>
        <Button className='SignupButton' bsStyle='success' onClick={ () => this.onSubmitHandler()}>Signup</Button>
      </div>
    )
  }
})

export default Signup;
