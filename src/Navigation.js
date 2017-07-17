import React, { Component } from 'react';

class Navigation extends Component {
  state = {
    logo: 'TIMETABLE',
  }

  render() {
    return(
        <nav>
          <div className="nav-title">
            <h1 id="logo">{this.state.logo}</h1>
          </div>
        </nav>
      )
    }
  }

export default Navigation;
