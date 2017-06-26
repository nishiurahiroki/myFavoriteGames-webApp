import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Login from './Login.jsx';

import TopView from './view/TopView.jsx';
import ListView from './view/ListView.jsx';
import RegistView from './view/RegistView.jsx';
import SystemView from './view/SystemView.jsx';

import MainMenus from './MainMenus.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history : props.history
    };
  }

  render() {
   const history = this.state.history;
   return (
          <MuiThemeProvider>
            <MainMenus browserHistory={history} infos={[
              {
                title : 'トップ',
                route : '/main/top',
                view : TopView
              },
              {
                title : '一覧',
                route : '/main/list',
                view : ListView
              },
              {
                title : '登録',
                route : '/main/regist',
                view : RegistView
              },
              {
                title : '管理',
                route : '/main/system',
                view : SystemView
              }
            ]} />
          </MuiThemeProvider>
        )
  }
}

ReactDom.render(
  (
   <Router history={history}>
     <Switch>
      <Route path="/main" component={App}>
      </Route>
      <Route path="/" component={Login} />
     </Switch>
   </Router>
  ),
  document.querySelector('#app')
);
