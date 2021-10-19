import React, { useContext } from "react"
// 引入colorContext： createContext 创建的上下文
import { colorContext } from "./Reducer"
// 动态接收color组件的数据
export default function Font() {
  const { color } = useContext(colorContext) //在组件中使用
  return (
    <div>
      <h4 style={{ color }}>切换字体颜色</h4>
    </div>
  )
}
