import React from 'react';

import View from './View.jsx';

export default class RegistView extends View{
  constructor(props) {
    super(props);
  }

  render() {
    return super.mainFrame({
      title : '登録画面',
      view  : (
        <div>

        </div>
      )
    });
  }
}
