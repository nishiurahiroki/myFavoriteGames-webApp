import React from 'react';

import View from './View.jsx';

import FormFields from '../form/FormFields.jsx';

import List from '../list/List.jsx';

export default class ListView extends View {
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
            id    : 'isNewTitle',
            type  : 'checkbox',
            blockStyle : {
              width : '20vw'
            },
            props : {
              labelPosition : 'left',
              label : '新作 :'
            }
          }
        ]}
        submitButtonText="検索"
        onSubmit={(inputValues) => {
          console.log(inputValues);
          // TODO dosomething
        }}
        />

        <List
          header={{
            columns : [
              'ゲーム名',
              '価格',
              '発売日',
              'メーカー'
            ]
          }}
        />
      </div>
    );
  }
}
