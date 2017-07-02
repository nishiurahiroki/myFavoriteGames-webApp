import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class View extends React.Component{
  routing(param) {
    if('string' === typeof param) {
      this.props.history.push(param);
      return;
    }

    this.props.history.push({
      pathname : param.pathname,
      query    : param.parameter
    });
  }

  mainFrame(childView) {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={this.props.title}
          style={{width:'75vw'}}
          />
        <div style={{marginTop:'3vh', marginLeft:'0.7vw'}}>
          {childView}
        </div>
      </div>
    )
  }
}
