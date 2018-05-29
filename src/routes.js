import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/Test';
import AboutPage from './components/AboutPage';

export default (
  <Route>
      <Route path="/" component ={App} />
      <Route path="about" component={AboutPage} />
  </Route>
);
