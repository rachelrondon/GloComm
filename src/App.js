import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectFieldComponent from './SelectFieldComponent';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <SelectFieldComponent />
    </div>
  </MuiThemeProvider>
);

export default App;
