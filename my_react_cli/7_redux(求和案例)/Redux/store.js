// 创建store
// 引入redux 创建store
import { createStore } from "redux"
// 引入reducer,为store对象
import countReducer from "./count_reducer"
export default createStore(countReducer)
