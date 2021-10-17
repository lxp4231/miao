// 创建store
// 引入redux 创建store
import { createStore, applyMiddleware, combineReducers } from "redux" //combineReducers用于合并reducer
// 引入为count组件服务的reducer
import countReducer from "./reducers/count"
// 引入为person组件服务的reducer
import personReducer from "./reducers/person"
// 引入redux-thunk用于支持异步action,applyMiddleware：执行中间件
import thunk from "redux-thunk"
// 合并reducer,汇总
const allReducer = combineReducers({
  countReducer,
  personReducer,
})
export default createStore(allReducer, applyMiddleware(thunk))
