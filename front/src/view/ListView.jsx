import React from 'react';

import View from './View.jsx';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import RaisedButton from 'material-ui/RaisedButton';

export default class ListView extends View {
  constructor(props) {
    super(props);
  }

  render() {
    return super.mainFrame({
      title : '一覧',
      view  : (
        <div>
          <div>
            検索名 : <TextField  hintText="名前" />
          </div>
          <div style={{display:'inline-block'}}>
            発売日 : <DatePicker autoOk={true} style={{display: 'inline-block'}} hintText="開始" container="inline"/>
                      <span style={{margin:'2px'}}>～</span>
                    <DatePicker autoOk={true} style={{display: 'inline-block'}} hintText="終了" container="inline"/>
          </div>
          <div style={{width:'55vw'}}>
            <RaisedButton label="検索" primary={true} style={{float:'right'}}/>
          </div>
        </div>
      )
    });
  }
}
