# 静态存储

## 相当于`vue`常用的`pinia`

使用`redux`

```tsx
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/reducers/counter";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <span>{`Name: ${user.name}, Age: ${user.age}`}</span>
      </div>
    </div>
  );
}
```

## store 配置

```shell
├─ hooks.ts
├─ index.ts
├─ reducers
│   ├─ counter.ts
│   └─ user.ts
└─ utils
    └─ local.ts

```

```ts
// counter.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

```ts
// user.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = { name: "", age: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;
```

```ts
// local.ts
// 用于把store数据同步到localStorage中

import { RootState } from "..";

export const saveState = (state: Partial<RootState>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
```

```ts
// hooks.ts
// 用于使用嵌合typescript和redux
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// 使用这些钩子代替普通的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import userReducer from "./reducers/user";
import { loadState, saveState } from "./utils/local";

// 配置reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// 取出localStorage中的初始状态
const preloadedState = loadState();

// 配置store
const store = configureStore({
  reducer: rootReducer,
  preloadedState, // 加载初始状态
});

// Typescript嵌入实现
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// 监听store的变化
store.subscribe(() => {
  const state = store.getState();
  saveState({ counter: state.counter }); // 只保存 counter 的状态到 localStorage
});

export default store;
```
