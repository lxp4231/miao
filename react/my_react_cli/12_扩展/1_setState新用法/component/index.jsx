import React, { Component } from "react"

export default class index extends Component {
  state = {
    num: 0,
  }
  add = () => {
    const { num } = this.state
    //   1
    this.setState(
      {
        num: num + 1,
      },
      () => {
        //1 setState的更新是异步的，第二个参数是一个回调函数，在改变状态后，重新渲染render后调用
        console.log(this.state.num) //可以拿到最新的值
      }
    )
    console.log(this.state.num) //不能拿到最新的值
    // //   2
    // this.setState(state => {
    //   return { num: state.num + 1 }
    // })
  }
  render() {
    return (
      <div>
        <h4>当前值：{this.state.num}</h4>
        <button onClick={this.add}>点击++</button>
      </div>
    )
  }
}
