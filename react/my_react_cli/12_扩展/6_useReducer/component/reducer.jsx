import React, { useReducer } from "react"

export default function CountReducer() {
  // dispatch会传递 action
  // useReducer传递两个值，一个reducer,一个初始值
  const [count1, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1
      case "unadd":
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h4>reducer值：{count1}</h4>
      <button onClick={() => dispatch("add")}>加</button>
      <button onClick={() => dispatch("unadd")}>减</button>
    </div>
  )
}
