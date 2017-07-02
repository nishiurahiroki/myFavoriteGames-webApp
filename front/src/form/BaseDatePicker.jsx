import React, { PropTypes } from 'react';
import BaseDatePicker from 'material-ui/DatePicker';

class DatePicker extends React.Component {

  constructor() {
    super();
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  // Note that the default value for a MaterialUI DatePicker is {}
  // NOT an empty string or any other value type
  convertToDateString(dateMillis) {
    if (dateMillis !== null && typeof yourVariable === 'object') {
      return dateMillis;
    }
    return new Date(dateMillis);
  }

  // Note that event is always null, but it is the first arg.
  // The reason it is null and it exists is because MUI wanted to maintain consistency
  // with the Textfield control.
  // http://www.material-ui.com/#/components/date-picker
  onChange(event, date) { //eslint-disable-line no-unused-vars
    const { onDataChange, name } = this.props;
    onDataChange(name, date);
  }

  render() {
    const {
      name,
      fullWidth,
      style,
      textFieldStyle
    } = this.props;

    return (
      <BaseDatePicker
        onChange={this.onChange}
        name={name} // This is required as Material-UI needs a key index on TextField
        fullWidth={fullWidth}
        style={style}
        textFieldStyle={textFieldStyle}
        autoOk={true}/>
    );
  }
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  style: PropTypes.object,
  textFieldStyle: PropTypes.object
};

export default DatePicker;
