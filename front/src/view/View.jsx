import React from 'react';

export default class View extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      history : props.history
    }
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
}
