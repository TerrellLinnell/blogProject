import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Views/Home';
import About from './Containers/About';
import Portfolio from './Containers/Portfolio';
import Signup from './Containers/Signup';
import Login from './Containers/Login';
import Blog from './Containers/Blog';
import UpdatePostContainer from './Containers/UpdatePostContainer';
import UpdateCommentContainer from './Containers/UpdateCommentContainer';

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Portfolio' component={Portfolio}/>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/Blog' component={Blog} />
      <Route path='/UpdatePostContainer/:postId' component={UpdatePostContainer}/>
      <Route path='/UpdateCommentContainer/:commentId' component={UpdateCommentContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
