import React from 'react';
import {Link} from 'react-router';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import $ from 'jquery';

var App = React.createClass({
  onClickHandler: function () {
          $.ajax({
            url:    '/logout',
            method: 'GET',
          }).done(function () {
            console.log('User logged out');
          });
  },
  render: function () {
    return (
      <div>
          <Navbar className='navbar' inverse >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><img src="https://www.clipartsgram.com/image/689550139-smilingsimpleblackbackground-26197.jpg" role='presentation' height="40"/></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem><Link to={'/'}>Home</Link></NavItem>
              <NavItem><Link to={'/About'}>About</Link></NavItem>
              <NavItem><Link to={'/Portfolio'}>Portfolio</Link></NavItem>
              <NavItem><Link to={'/Blog'}>Blog</Link></NavItem>
            </Nav>
            <Nav>
              <NavItem><Link to={'/signup'}>Signup</Link></NavItem>
              <NavItem><Link to={'/login'}>Login</Link></NavItem>
              <NavItem onClick={() => this.onClickHandler()}> <Link to={'/logout'}> Logout </Link> </NavItem>
            </Nav>
          </Navbar>
        <div>
          {this.props.children && React.cloneElement(this.props.children, {})}
        </div>
      </div>
    )
  }

});

export default App;
