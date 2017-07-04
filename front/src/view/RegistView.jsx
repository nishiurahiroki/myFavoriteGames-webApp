import React from 'react';

import View from './View.jsx';

import FormFields from '../form/FormFields.jsx';

export default class RegistView extends View{
  constructor(props) {
    super(props);
  }

  render() {
    return super.mainFrame(
      <div>
        <FormFields settings={[
          {
            id    : 'gameName',
            type  : 'text',
            label : '名称',
            props : {
              hintText : 'ゲーム名称'
            }
          },
          {
            id    : 'date',
            type  : 'fromTo',
            label : '発売日',
            props : {
              hintText : '発売日',
              autoOk : true,
              style : {
                display: 'inline-block'
              },
              container : 'inline',
              name : 'date'
            }
          },
          {
            id    : 'price',
            type  : 'numberText',
            label : '価格',
            props : {
              hintText : '価格',
              min : 0
            }
          }
        ]}
        submitButtonText="登録"
        onSubmit={(inputValues) => {
          console.log(inputValues);
          // TODO dosomething
        }}
        />
      </div>
    );
  }
}
