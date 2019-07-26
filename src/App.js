import React from 'react';
import { ResetGlobalStyled } from './style.js';
import { IconfontGlobalStyled } from './statics/iconfont/iconfont.js';
import Header from './common/header';

function App() {
  return (
    <div>
      <ResetGlobalStyled />
      <IconfontGlobalStyled />
      <Header />
    </div>
  );
}

export default App;
