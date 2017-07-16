import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

class FontIconComponent extends Component {

  render() {
    return(
      <FontIcon
        className="muidocs-icon-action-home"
        style={iconStyles}
      />

    )
  };
}

export default FontIconComponent;
