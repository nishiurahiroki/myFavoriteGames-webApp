import React from 'react';

import { withRouter } from 'react-router';

export default class Login extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        history : props.history
      };
    }

    login() {
      this.state.history.push('main');
    }

    render() {
      return (
        <div>
          ログインページ
         <button onClick={this.login.bind(this)}>ログイン</button>
        </div>
      )
    }
}
