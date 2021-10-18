import React, { Component } from "react"
import "./index.css"
export default class Item extends Component {
  state = {
    mouse: false,
  }
  // button显示或隐藏
  handleMouse = flag => {
    return () => {
      this.setState({
        mouse: flag,
      })
    }
  }
  // 切换状态
  ischeck(id) {
    return event => {
      const { updateTodo } = this.props
      // event.target.checked获取选中状态
      updateTodo(id, event.target.checked)
    }
  }
  // 删除
  handleDelete = id => {
    return () => {
      const { deleteTodo } = this.props
      deleteTodo(id)
    }
  }
  render() {
    const { name, done, id } = this.props
    const { mouse } = this.state
    return (
      <div>
        <li
          style={{ backgroundColor: mouse ? "#ddd" : "" }}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          <label>
            <input type="checkbox" checked={done} onChange={this.ischeck(id)} />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    )
  }
}
