import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router';

import FoodPage from './components/FoodPage';
import App from './App';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
