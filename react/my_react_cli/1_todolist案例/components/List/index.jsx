import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "../Item/"
import "./index.css"
export default class List extends Component {
  // 对引入的updateTodo 进行类型限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }
  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map(item => {
          return (
            <Item
              key={item.id}
              {...item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            ></Item>
          )
        })}
      </ul>
    )
  }
}
