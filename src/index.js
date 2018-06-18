import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import MainRouter from './config/router';

ReactDOM.render(
  <React.Fragment>
    <MainRouter />
  </React.Fragment>,
  document.getElementById('app'),
);
