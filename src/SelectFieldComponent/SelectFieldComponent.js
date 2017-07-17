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

handleOpen = () => {
  this.setState({
    open: true,
  });
}

handleClose = () => {
  this.setState({open: false});
};

handleChange = (event, index, values) => this.setState({values});


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
          <Card
            style={{
              width: '300px',
              height: '300px',
              paddingTop: '80px',
              paddingLeft: '20px'
            }}>
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
              title={`Your ${values} has been added!`}
              open={this.state.open}
              onRequestClose={this.handleClose}
              >
            </Dialog>
          </Card>
        </div>
        );
      }
    }

  export default SelectFieldComponent;
