
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

const names = [
  'Rachel',
  'Sarah',
  'Rebecca'
]

const styles = {
  customWidth: {
    // width: 250,
  },
};

export default class SelectFieldComponent extends Component{

  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        label={this.prop}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
        onClick={function(make) {
          alert(` You chose ${values}`)
        }}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return(
      <SelectField
        multiple={false}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}
