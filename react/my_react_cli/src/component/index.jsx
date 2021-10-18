import React, { Component, Fragment, PureComponent } from "react"
// Fragment相当于template
// 创建context对象
const MyProvide = React.createContext()
const { Provider, Consumer } = MyProvide
export default class A extends PureComponent {
  state = {
    hasError: "", //用于标识子组件是否产生错误
  }
  // 错误边界（生产环境用 ）
  // 当A的子组件出现报错的时候，会触发此函数调用，并携带错误信息
  static getDerivedStateFormError(error) {
    console.log(error)
    return { hasError: error }
  }
  state = {
    name: "qwefdd",
    age: "100",
  }
  changeNname = () => {
    // state => (state.name = "liu666")
    this.setState({})
  }
  render() {
    return (
      <Fragment>
        <h4>A组件</h4>
        {/*  Provider 给所有子组件传递数据*/}
        <Provider value={{ name: this.state.name, age: this.state.age }}>
          {/* 此方式形成父子关系 render */}
          <B render={name2 => <C name2={name2} />} />
        </Provider>
        <button onClick={this.changeNname}>点击change</button>
      </Fragment>
    )
  }
}
class B extends PureComponent {
  state = { name2: "lll" }
  render() {
    return (
      <div>
        <h4>B组件</h4>
        {/*通过组件标签传递数据 children props*/}
        {/* <C> hello123</C> */}
        {/* 预留位置，相当于slot render props,可以给C组件传递数据name2 */}
        {this.props.render(this.state.name2)}
      </div>
    )
  }
}

class C extends Component {
  static contextType = MyProvide //static声明接收
  render() {
    console.log(this.props) //接收父组件传过来的props
    return (
      <Fragment>
        C组件: <span>name：{this.context.name}</span>
        <span>age：{this.context.age}</span>
        <span>name2:{this.props.name2}</span>
      </Fragment>
    )
  }
}

// 函数式组建中使用Consumer
// function C() {
//   return (
//     <Fragment>
//       <h4>c组件</h4>
//       <Consumer>
//         {value => {
//           return (
//             <div>
//               <span>
//                 name：{value.name} age：{value.age}
//               </span>
//             </div>
//           )
//         }}
//       </Consumer>
//     </Fragment>
//   )
// }
