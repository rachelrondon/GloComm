
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Here I am defining the array of cities  that will be used
const cities  = [
  'New York',
  'Paris',
  'Monaco',
  'Los Angeles'
]


class SelectFieldComponent extends Component{

  state = {
    values: [],
    open: false,
  };


  componentDidMount() {
    fetch(cities , {
      method:'GET'
    })
    .then((results) => {
      results.json().then((cities_data) => {
        this.setState({cities : cities_data});
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // here the handle open function is defined
  handleOpen = () => {
    this.setState({
      open: true,
    });
  }

// here the handle close function is defined
  handleClose = () => {
    this.setState({open: false});
  };

  // here the handle change function is defined
  handleChange = (event, index, values) => this.setState({values});


  // here the menuItems for the SelectField are passed the cities

  menuItems(values) {
  // the map function creates a new array with the results of calling a function on every element in the array
    return cities .map((city) => (
        <MenuItem
          key={city}
          insetChildren={true}
          label={this.prop}
          checked={values && values.indexOf(city) > -1}
          value={city}
          primaryText={city}
          onClick={this.handleOpen}
        />
        )
      );
    }

  render() {

    const {values} = this.state;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <div>

        <SelectField
          multiple={false}
          hintText="Select a city"
          value={values}
          onChange={this.handleChange}
        >
          {this.menuItems(values)}

        </SelectField>

        <Dialog
          actions={actions}
          modal={true}
          title={`You choose ${values}!`}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
        </Dialog>


      </div>
        );
      }
    }

  export default SelectFieldComponent;
