import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Here I am defining the array of names that will be used
const names = [
  'Rachel',
  'Sarah',
  'Rebecca'
]


class SelectFieldComponent extends Component{

  state = {
    values: [],
    open: false,
  };


  componentDidMount() {
    fetch(names, {
      method:'GET'
    })
    .then((results) => {
      results.json().then((names_data) => {
        this.setState({names: names_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
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


  // here the menuItems for the SelectField are passed the names

  menuItems(values) {
  // the map function creates a new array with the results of calling a function on every element in the array
    return names.map((name) => (
        <MenuItem
          key={name}
          insetChildren={true}
          label={this.prop}
          checked={values && values.indexOf(name) > -1}
          value={name}
          primaryText={name}
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
          hintText="Select a name"
          value={values}
          onChange={this.handleChange}
        >
          {this.menuItems(values)}

        </SelectField>

        <Dialog
          actions={actions}
          modal={true}
          title={`You chose ${values}`}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
        </Dialog>


      </div>
        );
      }
    }

  export default SelectFieldComponent;
