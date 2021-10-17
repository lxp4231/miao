import React, { Component } from "react"
import { nanoid } from "nanoid"
import PropTypes from "prop-types"
import "./index.css"
export default class Header extends Component {
  // 对引入的addTodo 进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  updateTodo = event => {
    const { addTodo } = this.props
    const { key, target } = event
    if (key !== "Enter") return
    //此处用e.key == 'Enter'
    addTodo({ id: nanoid(), name: target.value, done: false })
    // 添加后清空
    target.value = ""
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.updateTodo}
        />
      </div>
    )
  }
}
