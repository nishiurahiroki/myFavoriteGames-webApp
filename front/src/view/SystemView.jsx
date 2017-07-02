import React from 'react';

import View from './View.jsx';

export default class SystemView extends View{
  constructor(props) {
    super(props);
  }

  render() {
    return super.mainFrame(
      <div>
        システム設定画面
      </div>
    );
  }
}
