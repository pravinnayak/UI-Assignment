import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Suspense>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
