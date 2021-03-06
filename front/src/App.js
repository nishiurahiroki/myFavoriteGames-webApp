import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEvent from 'react-tap-event-plugin';
injectTapEvent();

import Login from './Login.jsx';

import TopView from './view/TopView.jsx';
import ListView from './view/ListView.jsx';
import RegistView from './view/RegistView.jsx';
import SystemView from './view/SystemView.jsx';

import MainMenus from './MainMenus.jsx';

import TopIcon from 'material-ui/svg-icons/navigation/apps';

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
              <MainMenus browserHistory={history} infos={[
                {
                  title : 'トップ',
                  route : '/main/top',
                  view : TopView,
                  icon : <i className="material-icons">public</i>
                },
                {
                  title : '一覧',
                  route : '/main/list',
                  view : ListView,
                  icon : <i className="material-icons">list</i>
                },
                {
                  title : '登録',
                  route : '/main/regist',
                  view : RegistView,
                  icon : <i className="material-icons">create</i>
                },
                {
                  title : '管理',
                  route : '/main/system',
                  view : SystemView,
                  icon : <i className="material-icons">settings</i>
                }
              ]} />
          )
  }
}

ReactDom.render(
  (
  <MuiThemeProvider>
   <Router history={history}>
     <Switch>
      <Route path="/main" component={App}>
      </Route>
      <Route path="/" component={Login} />
     </Switch>
   </Router>
  </MuiThemeProvider>
  ),
  document.querySelector('#app')
);
