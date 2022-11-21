import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

// 리듀서 조합
const reducer = combineReducers({
  counter,
});

// 스토어 생성
const store = configureStore({
  reducer,
});

// 스토어 내보내기
export default store;
