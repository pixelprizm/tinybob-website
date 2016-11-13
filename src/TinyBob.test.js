import React from 'react';
import ReactDOM from 'react-dom';
import TinyBob from './TinyBob';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TinyBob />, div);
});
