import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectFieldComponent from './SelectFieldComponent';

import { Link, browserHistory } from 'react';



class DrawerComponent extends Component{

  state = {
    open: true
  };


  handleTaskClick(event) {
    this.setState({
      taskClick: true
    })
  }

  renderTask() {
    if (this.state.taskClick) {
      return (
        <SelectFieldComponent />
      )
    }
  }


    render() {
      return (
        <div>
          <Drawer
            docked={true}
            width={75}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
          </Drawer>

          {this.renderTask()}
        </div>
      );
    }
  }
export default DrawerComponent;
