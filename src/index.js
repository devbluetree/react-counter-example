import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import reducer, { increase, decrease } from './modules/counter';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 6. 스토어 생성
const store = createStore(reducer);

const render = () =>
  root.render(
    <StrictMode>
      <App
        value={store.getState()}
        onIncrease={() => store.dispatch(increase())}
        onDecrease={() => store.dispatch(decrease())}
      />
    </StrictMode>
  );

render();

// 7. 리덕스 스토어와 리액트 컴포넌트 연동
store.subscribe(render);
