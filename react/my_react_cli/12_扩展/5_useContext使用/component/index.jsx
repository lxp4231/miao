/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext } from "react"
import ReactDOM from "react-dom"
const MyProvider = React.createContext()
export default function Demo() {
  const [count, setCount] = React.useState(0)
  // 点击++
  function add() {
    setCount(count + 1)
  }
  //副作用
  // React.useEffect(() => {
  //   // 页面挂载完毕count自增
  //   const timer = setInterval(() => {
  //     setCount(count => count + 1) //写成回调形式
  //   }, 1000)
  //   // 组件卸载之前清除定时器
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  // ref 打标识
  const myRef = React.useRef()
  function show() {
    alert(myRef.current.value)
  }
  // 点击销毁组件
  function destroy() {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
  }
  // 接收子组件的值
  function getChildValue(value) {
    console.log(value)
  }
  // createContext 类组件也可以使用
  return (
    <Fragment>
      <input type="text" ref={myRef} />
      <h4>count的值：{count}</h4>
      <button onClick={add}>点击++</button>
      <button onClick={destroy}>点击销毁</button>
      <button onClick={show}>点击显示ipt内容</button>
      {/* 子组件 必须要用value传值 ,类中要用双括号*/}
      <MyProvider.Provider value={{ count, getChildValue }}>
        <Child />
      </MyProvider.Provider>
    </Fragment>
  )
}

// 子组件
function Child() {
  const [sum, setSum] = React.useState(666)

  //1. 利用 Consumer接收，类中用的多
  // return (
  //   <Consumer>
  //     {value => {
  //       return (
  //         <div>
  //           <h4>接到的值:{value.count}</h4>
  //         </div>
  //       )
  //     }}
  //   </Consumer>
  // )
  // 2.用useConstext
  // 接收父组件传过来的值
  let value = useContext(MyProvider)
  //给父组件传值  getChildValue为父组件传递过来的回调
  value.getChildValue(sum)
  return (
    <div>
      <h4>接到的值:{value.count}</h4>
    </div>
  )
}
