//为count组件生成action对象
import { INCREMENT, DECREMENT } from "./constant"
// 同步执行
const createIncrementAction = data => ({ type: INCREMENT, data })
const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步执行(返回值为一个函数)
const createDecrementSyncAction = (data, time) => {
  return dispatch => {
    //dispatch在store身上
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
export { createIncrementAction, createDecrementAction, createDecrementSyncAction }
