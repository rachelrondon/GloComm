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

// This is what renders when the app is loaded.
// I am using the default lightBaseTheme
// To use this theme, the only thing that needs to be done is wrap everything with the <MuiThemeProvider>
// I wanted to create four rows with two columns
// Thus, I am rendering the SelectFieldComponent 8 times
// I have created a select-field-component class to add attributes to each specific card
// I have also made a row-select class to add attributes to each of the rows
  render() {
    return(
      <MuiThemeProvider>
      <div>
        <Navigation />
        <div className="row-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="row-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="row-select">
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
          <div className="select-field-component">
            <SelectFieldComponent />
          </div>
        </div>
        <div className="row-select">
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
