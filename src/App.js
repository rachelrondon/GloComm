import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectFieldComponent from './SelectFieldComponent/SelectFieldComponent';
import Navigation from './Navigation';
import Footer from './Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './Style/Style.css';

injectTapEventPlugin();

// App.Js will return the navigation bar, footer, and four columns containing two SelectFieldComponents each 
class App extends Component{

  render() {
    return(
      <MuiThemeProvider>
      <div>
        <Navigation />
        <div className="col-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="col-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="col-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="col-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App;
