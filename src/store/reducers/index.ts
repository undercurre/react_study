// reducers/index.ts
import { combineReducers } from "redux";
import counterReducer from "./counterReducer"; // 假设你已经创建了一个 counterReducer

const rootReducer = combineReducers({
  counter: counterReducer,
  // 在这里添加其他的 reducers
});

export default rootReducer;
