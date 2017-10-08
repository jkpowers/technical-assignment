/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

describe('App', () => {
  let wrapper;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
