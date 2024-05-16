import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import userReducer from "./reducers/user";
import { loadState, saveState } from "./utils/local";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState, // 加载初始状态
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  const state = store.getState();
  saveState({ counter: state.counter }); // 只保存 counter 的状态到 localStorage
});

export default store;
