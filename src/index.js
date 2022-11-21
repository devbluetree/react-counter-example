import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import reducer from './modules';
import { increase, decrease } from './modules/counter';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 6. 스토어 생성
const store = createStore(reducer);

// 7. 리덕스 스토어와 리액트 컴포넌트 연동
// 7.1 렌더링 함수 정의
const render = () =>
  root.render(
    <StrictMode>
      <App
        value={store.getState().counter}
        onIncrease={() => store.dispatch(increase())}
        onDecrease={() => store.dispatch(decrease())}
      />
    </StrictMode>
  );

// 7.2 렌더링 함수 실행
render();

// 7.3 `store.subscribe()` 메소드로 리액트 컴포넌트와 연동
store.subscribe(render);
