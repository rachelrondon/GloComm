import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TimePicker from 'material-ui/TimePicker';
import '../Style/Style.css';

// Here I hardcoded the options for the select-field
const tasks  = [
  'meeting',
  'phone call',
  'coffee break',
]

class SelectFieldComponent extends Component{

  state = {
    values: [],
    open: false,
  };

// Here is a fetch that will return the tasks results that have been hardcoded
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

// handleOpen is in regards to the dialog componet
handleOpen = () => {
  this.setState({
    open: true,
  });
}

// handleClose is in regards to the dialog component
handleClose = () => {
  this.setState({open: false});
};

// on change the value will be updated
handleChange = (event, index, values) => this.setState({values});


// For the menuItems I used the multiple selection example
  menuItems(values) {
    return tasks.map((task) => (
        <MenuItem
          key={task}
          insetChildren={true}
          label={this.prop}
          checked={values && values.indexOf(task) > -1}
          value={task}
          primaryText={task}
          onClick={this.handleOpen}
// onClick of the menu item, the dialog box opens
        />
        )
      );
    }

  render() {

  // here the values are defined as this.state
  // the values are equal to the current representation of state
  const {values} = this.state;

  // Handle close is in regards to the dialog component. After the dialog is displayed, then the use can click close for the dialog button to be removed
  // The FlatButton is in regards to the dialog component
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <div>
          <Card
    // Here I am using the Card component to display all of the information
    // I have styled the card component here instead of in the style.css file
    // If I wanted to style the component within the style.css file I would need to add a className
            style={{
              width: '300px',
              height: '300px',
              paddingTop: '80px',
              paddingLeft: '20px'
            }}>
            <SelectField
    // If multiple is changed to "true", then the user will be able to select multiple properties
    // when multiple is set to false, then the user is only able to select one property
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
            // values have been defined above as this.state
              title={`Your ${values} has been added!`}
              open={this.state.open}
            // the dialog box opens when the state changes to open
              onRequestClose={this.handleClose}
              >
            </Dialog>
          </Card>
        </div>
        );
      }
    }

  export default SelectFieldComponent;
