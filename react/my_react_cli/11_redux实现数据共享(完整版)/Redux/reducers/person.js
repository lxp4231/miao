import { ADDPERSON } from "../constant"
// 初始状态
const initState = [{ id: "001", name: "liu", age: "100" }]
export default function personReducer(preState = initState, action) {
  const { data, type } = action //data是新添加的哪个值
  switch (type) {
    case ADDPERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
