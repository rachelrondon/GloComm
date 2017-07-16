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
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
      </div>
      <div id="col-two">
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
      </div>
      <div id="col-three">
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
        <div className="select-field-component">
          <SelectFieldComponent />
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
