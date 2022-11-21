# react-counter-example

## 01-use-state-hook

### `useState()` 훅

```js
  const [getter, setter] = useState(initialState);
```

### 이벤트 핸들러 함수 정의

```js
const handleIncrease = () => setValue(value + 1);
const handleDecrease = () => setValue(value - 1);
```

- 핸들러 함수에서 getter와 setter로 상태를 변경한다.

### 이벤트 핸들러 함수 연결

```jsx
<button onClick={() => handleIncrease()}>+</button>
```

- 이벤트 핸들러 호출 수식의 화살표 함수 정의 형태로 포인터를 넘겨준다.

```jsx
<button onClick={handleIncrease}>+</button>
```

- 이벤트 핸들러에 넘겨줄 파라미터가 없으면 단순히 이벤트 핸들러 함수 이름으로 함수 포인터만 쓸 수 있다.
