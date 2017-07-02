import React from 'react';

import View from './View.jsx';

export default class RegistView extends View{
  constructor(props) {
    super(props);
  }

  render() {
    return super.mainFrame(
      <div>
        登録
      </div>
    );
  }
}
