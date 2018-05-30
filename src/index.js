import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router';

import FoodPage from './components/FoodPage';
import App from './App';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
