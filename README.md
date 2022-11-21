# react-counter-example

## 01-use-state-hook

### `useState()` 훅

```js
  const [getter, setter] = useState(initialState);
```

### 이벤트 핸들러 함수 정의

- 핸들러 함수에서 getter와 setter로 상태를 변경한다.
- 수식을 전달하는 방법과 함수를 전달하는 방법 두 가지가 있다.

#### 수식으로 상태 변경

```js
const handleIncrease = () => setValue(value + 1);
const handleDecrease = () => setValue(value - 1);
```

#### 함수식으로 상태 변경

```js
const handleIncrease = () => setValue((prev) => prev + 1);
const handleDecrease = () => setValue((prev) => prev - 1);
```

### 이벤트 핸들러 함수 연결

```jsx
<button onClick={() => handleIncrease()}>+</button>
```

- 이벤트 핸들러 호출 수식의 화살표 함수 정의 형태로 포인터를 넘겨준다.

```jsx
<button onClick={handleIncrease}>+</button>
```

- 이벤트 핸들러에 넘겨줄 파라미터가 없으면 단순히 이벤트 핸들러 함수 이름으로 함수 포인터만 쓸 수 있다.

## 02-legacy-createstore

```
npm install redux
```

기본 작업 순서

### 1. 액션 타입 정의

```js
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
```

### 2. 액션 함수 정의

```js
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
```

### 3. 초기 상태 정의

```js
const initialState = 0;
```

- String, Number 같은 원시 타입 하나만 상태로 관리할 수 있고 객체로 상태를 관리할 수도 있다.

### 4. 리듀서 정의

```js
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
```

- 리듀서는 현재 상태와 액션을 가져와 다음 상태를 반환한다.
- 스토어는 하나의 리듀서만 가질 수 있다.

### 5. 모듈 내보내기

```js
export default counter;
export { increase, decrease };
```

- `export default`로 리듀서 함수를 내보낸다.
- `export`로 액션 함수를 내보낸다.

### 6. 스토어 생성

```js
import { legacy_createStore as createStore } from 'redux';
const store = createStore(reducer);
```

- `createStore` 함수 직접 호출은 현재 리덕스에서 권장하지 않아서 경고가 발생한다.

### 7. 리덕스 스토어와 리액트 컴포넌트 연동

```js
const render = () =>
  root.render(... );

render();

store.subscribe(render);
```

- 컴포넌트 렌더링 함수를 선언 형태로 따로 분리하고 실행한다.
- 컴포넌트 렌더링 함수와 리덕스 스토어를 `subscribe` 메소드로 연동한다.

### 8. state to props, props to state

```jsx
// src/index.js
<App
  value={store.getState()}
  onIncrease={() => store.dispatch(increase())}
  onDecrease={() => store.dispatch(decrease())}
/>

// src/App.js
const App = ({ value, onIncrease, onDecrease }) => { ... }
```

- `App`의 `props`로 넘겨준다.
- state to props: `store.getState()`
- props to state: `store.dispatch(액션객체)`
