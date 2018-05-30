import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/Test';
import AboutPage from './components/AboutPage';
import Header from './components/Header';

export default (
  <Route path="/" component ={Header}>
      <IndexRoute component={App} />
      <Route path="about" component={AboutPage} />
  </Route>
);
