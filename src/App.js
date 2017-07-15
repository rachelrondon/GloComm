import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import SelectFieldComponent from './SelectFieldComponent';
import MenuItem from 'material-ui/MenuItem';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <div>
      <MyAwesomeReactComponent />
      <SelectFieldComponent />
    </div>
  </MuiThemeProvider>
);

export default App;
