import React, { Component } from 'react';

class Footer extends Component {
  state = {
    logo: 'TIMETABLE',
  }

// the logo was defined within the state and then passed below.
  render() {
    return(
        <footer>
          <h4 id="footer-msg">Thank you for using {this.state.logo}!</h4>
        </footer>
      )
    }
  }

export default Footer;
