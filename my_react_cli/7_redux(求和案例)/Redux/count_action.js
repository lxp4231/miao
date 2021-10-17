import { INCREMENT, DECREMENT } from "./constant"
//为count组件生成action对象
const createIncrementAction = data => ({ type: INCREMENT, data })
const createDecrementAction = data => ({ type: DECREMENT, data })
export { createIncrementAction, createDecrementAction }
