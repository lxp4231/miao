import React, { useContext } from "react"
import { colorContext } from "./Reducer"
import { UPDATE_COLOR } from "./Reducer"
export default function Button() {
  const { dispatch } = useContext(colorContext)
  return (
    <div>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, data: "red" })}>红色</button>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, data: "green" })}>
        绿色
      </button>
    </div>
  )
}
