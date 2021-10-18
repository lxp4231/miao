import React, { Component } from "react"
import "./index.css"
export default class Footer extends Component {
  // 全选、全不选
  handleCheckAll = event => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除已完成
  clearDone = () => {
    this.props.clearAllDone()
  }
  render() {
    // console.log(this)
    const { todos } = this.props
    // 总数
    const total = todos.length
    // 已完成
    const doneCount = todos.reduce((prev, current) => {
      return prev + (current.done ? 1 : 0)
    }, 0)
    // 或
    // const doneCount = todos.filter(it => {
    //   return it.done === true
    // }).length

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={total === doneCount && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
