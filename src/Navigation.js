import React, { Component } from 'react';
import FontButtonComponent from './FontButtonComponent';

class Navigation extends Component {
  state = {
    logo: 'TIMETABLE',
    name: 'RACHEL'
  }

  render() {
    return(
        <nav>
          <div className="nav-title">
            <h1 id="greeting-message">{this.state.logo}</h1>
          </div>
        </nav>
    )
  }
}

export default Navigation;
