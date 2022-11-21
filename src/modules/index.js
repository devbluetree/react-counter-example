import { combineReducers } from 'redux';
import counter from './counter';

// 리듀서 조합
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
