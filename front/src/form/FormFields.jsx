import React from 'react';

import TextField from 'material-ui/TextField';
import DatePicker from './BaseDatePicker.jsx';
import Checkbox from 'material-ui/Checkbox';

import RaisedButton from 'material-ui/RaisedButton';

export default class FormFields extends React.Component{
  constructor(props) {
    super(props);
    this.fieldTypes = {
      text : {
        field : TextField,
        putValueEvent : {
          onChange : (e) => {
            this.state.values[e.target.name] = e.target.value;
          }
        }
      },
      fromTo : {
        field : DatePicker,
        putValueEvent : {
          onDataChange : (name, value) => {
            this.state.values[name] = value;
          }
        }
      },
      checkbox : {
        field : Checkbox,
        putValueEvent : {
          onCheck : (e, checked) => {
            this.state.values[e.target.name] = checked;
          }
        }
      }
    };
    this.fieldComponent = null;
    this.state = {
      values : {}
    };
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
      <div style={{width:'55vw'}}>
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
