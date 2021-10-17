// 创建store
// 引入redux 创建store
import { createStore, applyMiddleware } from "redux"
// 引入reducer,为store对象
import countReducer from "./count_reducer"
// 引入redux-thunk用于支持异步action,applyMiddleware：执行中间件
import thunk from "redux-thunk"
export default createStore(countReducer, applyMiddleware(thunk))
