import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Login from './Login.jsx';


class App extends React.Component {
  constructor(props) {
        super(props);
  }
    
  render() {
    return (
            <MuiThemeProvider>
             <div style={{
                 width:"20vw"
             }}>
              <Menu>
               <MenuItem primaryText="トップ" />
               <MenuItem primaryText="一覧" />
               <MenuItem primaryText="登録" />
               <MenuItem primaryText="ユーザー管理" />
              </Menu>
             </div>
            </MuiThemeProvider>
    )
  }
}

ReactDom.render(
    (   <Router history={history}>
         <Switch>
          <Route path="/main" component={App}>
          </Route>
          <Route path="/" component={Login} />
         </Switch>
        </Router>
    )    ,
        document.querySelector('#app')
);
