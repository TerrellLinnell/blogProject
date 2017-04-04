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
    var self = this;
    $.ajax({
      url:    '/login',
      method: "POST",
      data:   this.state
    }).done(function (data) {
      if (data.local) {
        alert('User logged in');
        self.setState({user: data})
        window.location = '/#/';
      } else {
        if(data.message) {
        alert(data.message);
      }
      alert("🤔🤔🤔🤔🤔Wrong username or password🤔🤔🤔🤔🤔")
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
            <FormControl  className='SignupInput' type='text' placeholder='password' onChange={ (event) => this.onChangeHandler('password', event.target.value)} />
          </FormGroup>
        </Form>
        <Button className='SignupButton' bsStyle='success' onClick={ () => this.onSubmitHandler()}>Login</Button>
      </div>
    );
  }
})

export default Signup;
