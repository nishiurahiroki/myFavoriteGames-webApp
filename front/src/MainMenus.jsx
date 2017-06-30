import React from 'react';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { Route } from 'react-router-dom';

export default class MainMenus extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      infos : props.infos,
      browserHistory : props.browserHistory
    };
  }

  getMenus() {
    const browserHistory = this.state.browserHistory;
    return (
      <Menu style={{width:"20vw", display:'inline-block'}}>
        {this.state.infos.map((info) => {
          return (
            <MenuItem key={info.route} primaryText={info.title} onClick={() => {
              browserHistory.push(info.route);
            }} />
          )
        })}
      </Menu>
    )
  }

  getRouteSettings() {
    return this.state.infos.map((info) => {
      return (
        <Route key={info.route} path={info.route} component={info.view} />
      )
    });
  }

  render() {
    return (
      <div style={{ display:'inline-block' }}>
        {this.getMenus()}
        {this.getRouteSettings()}
      </div>
    )
  }
}
