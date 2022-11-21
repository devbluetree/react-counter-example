// 1. 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 함수 정의
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 정의 (원시기본타입)
const initialState = 0;

// 4. 리듀서 정의
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

// 5. 모듈 내보내기
export default counter;
export { increase, decrease };
