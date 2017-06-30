import React from 'react';

import View from './View.jsx';

export default class ListView extends View{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display:'inline-block' }}>
       一覧画面
      </div>
    )
  }
}
