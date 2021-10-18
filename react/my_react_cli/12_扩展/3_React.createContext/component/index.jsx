import React, { Component, Fragment } from "react"
// Fragment相当于template
// 创建context对象
const MyProvide = React.createContext()
const { Provider, Consumer } = MyProvide
export default class A extends Component {
  state = {
    name: "qwefdd",
    age: "100",
  }
  render() {
    return (
      <Fragment>
        <h4>A组件</h4>
        <Provider value={{ name: this.state.name, age: this.state.age }}>
          <B />
        </Provider>
      </Fragment>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div>
        <h4>B组件</h4>
        <C />
      </div>
    )
  }
}
// class C extends Component {
//   static contextType = MyProvide //static声明接收
//   render() {
//     console.log(this.context)
//     return (
//       <Fragment>
//         C组件: <span>name：{this.context.name}</span>
//         <span>age：{this.context.age}</span>
//       </Fragment>
//     )
//   }
// }

function C() {
  return (
    <Fragment>
      <h4>c组件</h4>
      <Consumer>
        {value => {
          return (
            <span>
              name：{value.name} age：{value.age}
            </span>
          )
        }}
      </Consumer>
    </Fragment>
  )
}
