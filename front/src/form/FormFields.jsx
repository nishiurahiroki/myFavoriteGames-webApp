import React from 'react';

import TextField from 'material-ui/TextField';
import DatePicker from './BaseDatePicker.jsx';
import Checkbox from 'material-ui/Checkbox';
import NumberInput from 'material-ui-number-input';

import RaisedButton from 'material-ui/RaisedButton';

export default class FormFields extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      values : {},
      onChangeFieldValue : this.props.onChangeFieldValue ?
        this.props.onChangeFieldValue :
        () => { /** none **/ }
    };
    this.fieldTypes = {
      text : {
        field : TextField,
        putValueEvent : {
          onChange : (e) => {
            this.state.values[e.target.name] = e.target.value;
            this.state.onChangeFieldValue(this.state.values);
          }
        }
      },
      fromTo : {
        field : DatePicker,
        putValueEvent : {
          onDataChange : (name, value) => {
            this.state.values[name] = value;
            this.state.onChangeFieldValue(this.state.values);
          }
        }
      },
      checkbox : {
        field : Checkbox,
        putValueEvent : {
          onCheck : (e, checked) => {
            this.state.values[e.target.name] = checked;
            this.state.onChangeFieldValue(this.state.values);
          }
        }
      },
      numberText : {
        field : NumberInput,
        putValueEvent : {
          onChange : (e) => {
            this.state.values[e.target.name] = e.target.value;
            this.state.onChangeFieldValue(this.state.values);
          }
        }
      }
    };
    this.fieldComponent = null;
  }

  createFields() {
    if(!this.props.settings) {
      return [];
    }

    if(false === Array.isArray(this.props.settings)) {
      return [];
    }

    return this.props.settings.map((setting) => {
      const label = setting.label ?
        setting.label + ' : ' :
        '';
      this.fieldComponent = this.fieldTypes[setting.type];

      return (
        <div key={setting.id} style={setting.blockStyle}>
          {label}
          <this.fieldComponent.field
            key={setting.id}
            name={setting.id}
            {...setting.props}
            {...this.fieldComponent.putValueEvent}
          />
        </div>
      );
    });
  }

  createSubmitButton() {
    if(!this.props.submitButtonText) {
      return;
    }

    return (
      <div style={{width:'75vw'}}>
        <RaisedButton
          label={this.props.submitButtonText}
          primary={true}
          style={{float:'right'}}
          onClick={() => {
            this.props.onSubmit(this.state.values);
          }}
        />
      </div>
    );
  }

  render() {
      return (
        <div>
          {this.createFields()}
          {this.createSubmitButton()}
        </div>
      )
  }
};
