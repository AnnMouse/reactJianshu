import React from 'react';
import { Provider } from 'react-redux';
import { ResetGlobalStyled } from './style.js';
import { IconfontGlobalStyled } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <ResetGlobalStyled />
        <IconfontGlobalStyled />
        <Header />
      </Provider>
  );
}

export default App;
