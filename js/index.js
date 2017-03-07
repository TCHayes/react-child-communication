import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

require('babel-polyfill');

const lists = [
  {
    id: 1,
    title: 'List One',
    
  },
  {
    id: 2,
    title: 'List Two',

  }
];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title='This is the Board Title' lists={lists} />, document.getElementById('app'))
);
