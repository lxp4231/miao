//创建一个为Count服务的reducer
// reducer函数接收参数：preState:之前的状态(初始化状态为0)，action:动作对象
import { INCREMENT, DECREMENT } from "../constant"
export default function countReducer(preState = 0, action) {
  const { data, type } = action //获取到data，type
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState //返回init状态
  }
}
