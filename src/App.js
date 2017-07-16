import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectFieldComponent from './SelectFieldComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <SelectFieldComponent />
      <SelectFieldComponent />
      <SelectFieldComponent />
      <SelectFieldComponent />
    </div>
  </MuiThemeProvider>
);

export default App;
