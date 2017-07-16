import React, { Component } from 'react';
import FontIconComponent from './FontIconComponent';



class Navigation extends Component {
  state = {
    logo: 'TIMETABLE',
    name: 'RACHEL'
  }


  render() {
    return(
        <nav>
          <div className="navTitle">
            <h1 id="greeting-message">{this.state.name}'S {this.state.logo}</h1>
          </div>
        </nav>
    )
  }
}

export default Navigation;
