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
