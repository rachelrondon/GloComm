import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TimePicker from 'material-ui/TimePicker';


// Here I am defining the array of tasks  that will be used
const tasks  = [
  'Meeting',
  'Phone Call',
  'Lunch',
]


class SelectFieldComponent extends Component{

  state = {
    values: [],
    open: false,
  };


  componentDidMount() {
    fetch(tasks , {
      method:'GET'
    })
    .then((results) => {
      results.json().then((tasks_data) => {
        this.setState({tasks : tasks_data});
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


  // here the menuItems for the SelectField are passed the tasks

  menuItems(values) {
  // the map function creates a new array with the results of calling a function on every element in the array
    return tasks .map((task) => (
        <MenuItem
          key={task}
          insetChildren={true}
          label={this.prop}
          checked={values && values.indexOf(task) > -1}
          value={task}
          primaryText={task}
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
          hintText="Task"
          value={values}
          onChange={this.handleChange}
        >
          {this.menuItems(values)}

        </SelectField>

        <TimePicker
          hintText="Time"
          autoOk={true}
        />


        <Dialog
          actions={actions}
          modal={true}
          title={`${values}!`}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
        </Dialog>


      </div>
        );
      }
    }

  export default SelectFieldComponent;
