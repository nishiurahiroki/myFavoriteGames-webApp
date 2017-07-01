import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class View extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      history : props.history,
      title : ''
    };

    this.mainBlockStyle = {
      float : 'left'
    };
  }

  routing(param) {
    if('string' === typeof param) {
      this.state.history.push(param);
      return;
    }

    this.state.history.push({
      pathname : param.pathname,
      query    : param.parameter
    });
  }

  mainFrame(child) {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={child.title}
          style={{width:'75vw'}}
          />
        <div style={{marginTop:'3vh', marginLeft:'0.7vw'}}>
          {child.view}
        </div>
      </div>
    )
  }
}
