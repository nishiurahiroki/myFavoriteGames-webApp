import React from 'react';

import { onlyUpdateForKeys } from 'recompose';

const Login = onlyUpdateForKeys(['history'])(({history}) => {
    return <div>
            ログインページ
           <button onClick={() => {
             history.push('main')
           }}>ログイン</button>
          </div>
});

export default Login;
