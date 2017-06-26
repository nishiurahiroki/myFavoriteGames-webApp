import React from 'react';

import View from './View.jsx';

export default class TopView extends View{
       constructor(props){
        super(props);
       }

       render() {
         return (
          <div>
            トップ画面
          </div>
         )
       }
}
