import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

// 1. 리듀서 조합
const reducer = combineReducers({
  counter,
});

// 2. 스토어 설정
const store = configureStore({
  reducer,
});

// 3. 스토어 설정 내보내기
export default store;
