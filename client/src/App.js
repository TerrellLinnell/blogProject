import React from 'react';
import './App.css';
import { Link } from 'react-router';
import {Navbar, NavItem, Nav} from 'react-bootstrap';


var App = React.createClass({
  render: function () {
    return (
      <div>
          <Navbar className='navbar' inverse >
            <Navbar.Header>
              <Navbar.Brand>
                <a>Blogger</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem><Link to={'/'}>Home</Link></NavItem>
              <NavItem><Link to={'/About'}>About</Link></NavItem>
              <NavItem><Link to={'/Portfolio'}>Portfolio</Link></NavItem>
              {/* <NavItem><Link to={'/signup'}>Signup</Link></NavItem>}
              //  <NavItem><Link to={'/login'}>Login</Link></NavItem>}
              //  <NavItem><Link to={'/logout'}>Logout</Link></NavItem> */}
              </Nav>
          </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

});

export default App;
