import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './modules';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 6. 리덕스 스토어와 리액트 컴포넌트 연동
// 6.1 렌더링 함수 정의
const render = () =>
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );

// 6.2 렌더링 함수 실행
render();
