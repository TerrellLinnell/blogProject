import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Signup from './Signup';
import Login from './Login';
import Blog from './Blog';
import UpdatePostContainer from './UpdatePostContainer';
import UpdateCommentContainer from './UpdateCommentContainer';

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
