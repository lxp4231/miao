import React, { createContext, useReducer } from "react"
// 创建一个constants 常量
export const UPDATE_COLOR = "UPDATE_COLOR"
// // 创建一个action
// export const action = data => ({ type: UPDATE_COLOR, data })
// 创建一个reducer
const reducer = (state, action) => {
  console.log(action)
  const { type, data } = action
  switch (type) {
    case UPDATE_COLOR:
      return data
    default:
      return state
  }
}
// 创建 Context 为子组件传递数据
export const colorContext = createContext()
//函数式组件会传进一个props
export function Reducer(props) {
  // useReducer有两个参数：(reducer，默认值)
  const [color, dispatch] = useReducer(reducer, "#000") //color传递的值，"#000"为默认值
  return (
    <colorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </colorContext.Provider>
  )
}
