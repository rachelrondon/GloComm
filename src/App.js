import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerComponent from './DrawerComponent';
import SelectFieldComponent from './SelectFieldComponent';
import BottomNavigationComponent from './BottomNavigationComponent';
import Navigation from './Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navigation />
      <div id="col-one">
        <SelectFieldComponent />
        <SelectFieldComponent />
      </div>
      <div id="col-two">
        <SelectFieldComponent />
        <SelectFieldComponent />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
