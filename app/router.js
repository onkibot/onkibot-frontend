// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import OnkibotApp from './components/OnkibotApp';
import Home from './components/Home';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={OnkibotApp}>
      <Route path="/" component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
