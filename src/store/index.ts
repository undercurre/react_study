import { createStore } from "redux";
import rootReducer from "./reducers"; // 假设你已经创建了根 reducer

const store = createStore(rootReducer);

export default store;
