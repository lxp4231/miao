import React, { Fragment } from "react"
import ReactDOM from "react-dom"
// 使用类组件
// export default class index extends React.Component {
//   state = {
//     num: 0,
//   }
//   //类式组件实现自增
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         num: this.state.num + 1,
//       })
//     }, 1000)
//   }
//   add = () => {
//     this.setState(state => {
//       return { num: state.num + 1 }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h4>当前值：{this.state.num}</h4>
//         <button onClick={this.add}>点击++</button>
//       </div>
//     )
//   }
// }

// 函数式组件
export default function Index() {
  // React.useState 为一个数组，第一个参数为状态的初始值，第二个参数为更新状态的方法
  const [count, setCount] = React.useState(0) //0为初始值
  const [name, setName] = React.useState("liu")
  //点击添加
  function add() {
    // setCount(count + 1)//写法1
    setCount(count => count + 1) //写法2
  }
  // 实现自增
  // React.useEffect 用于监测
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      // 在这里清除定时器
      clearInterval(timer)
    } //此函数返回的函数相当于 componentWillUnmount 卸载之前
  }, []) //[]此数组中为检测的对象，为空时相当于componentDidMount,不为空时相当于componentDidUpdate
  //
  function change() {
    setName("yuch")
  }
  // 卸载组件
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
  }
  // useRef使用:保存组件内标签
  const myRef = React.useRef()
  function show() {
    //使用 myRef.current拿到节点
    alert(myRef.current.value)
  }
  return (
    <div>
      <h4>
        当前值：{count} ; name:{name}
      </h4>
      <input type="text" ref={myRef} />
      <button onClick={add}>点击++</button>
      <button onClick={change}>点击++</button>
      <button onClick={unmount}>点击卸载</button>
      <button onClick={show}>点击展示ipt</button>
    </div>
  )
}
