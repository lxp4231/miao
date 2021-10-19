import { INCREMENT, DECREMENT } from "../constant"
//为count组件生成action对象
// 同步执行
const createIncrementAction = data => ({ type: INCREMENT, data })
const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步执行
const createDecrementSyncAction = (data, time) => {
  return dispatch => {
    //dispatch会自动传过来，applyMiddleWare
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
export { createIncrementAction, createDecrementAction, createDecrementSyncAction }
