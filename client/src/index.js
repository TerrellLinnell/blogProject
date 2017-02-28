import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

ReactDOM.render(
  <Router history={hashHistory} >
  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
  <Route path='/About' component={About}/>
  <Route path='/Portfolio' component={Portfolio}/>
  {/* <Route path='/edit/:animalId' component={EditAnimalContainer}/>
  <Route path='/signup' component={Signup} />
  <Route path='/login' component={Login} /> */}
  </Route>
</Router>,
  document.getElementById('root')
);
