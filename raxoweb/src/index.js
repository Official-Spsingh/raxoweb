import React from 'react';
import ReactDOM from 'react-dom';
import './scss/core.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();