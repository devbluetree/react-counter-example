import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  // 1. 슬라이스 이름
  name: 'counter',

  // 2. 초기 상태 정의
  initialState: {
    counter: 0,
  },

  // 3. 리듀서의 액션 정의
  reducers: {
    increase: (state, action) => {
      state.counter += 1;
    },
    decrease: (state, action) => {
      state.counter -= 1;
    },
  },
});

// 4. 모듈 내보내기 (리듀서 및 액션 반환 함수)
export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
