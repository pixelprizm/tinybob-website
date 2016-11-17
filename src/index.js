// (It's important to import Bootstrap first so that our CSS will override it.)
import './css/bootstrap/css/bootstrap.css';
import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TinyBob from './TinyBob';


ReactDOM.render(
  <TinyBob />,
  document.getElementById('root')
);
