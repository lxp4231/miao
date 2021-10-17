import React, { Component } from "react"
// 引入组件
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
export default class app extends Component {
  state = {
    todos: [
      {
        id: "001",
        name: "eat",
        done: true,
      },
      {
        id: "002",
        name: "sleep",
        done: false,
      },
      {
        id: "003",
        name: "play",
        done: true,
      },
    ],
  }
  // 添加todo
  addTodo = value => {
    const { todos } = this.state
    const newTodos = value
    // 更新状态
    this.setState({
      todos: [newTodos, ...todos],
    })
  }
  // 取消或勾选
  updateTodo = (id, done) => {
    const { todos } = this.state
    // // map 返回新数组
    todos.forEach(it => {
      if (id === it.id) {
        it.done = !it.done
      }
    })
    this.setState({
      todos,
    })
  }
  // 删除
  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(it => {
      return it.id !== id
    })
    this.setState({
      todos: newTodos,
    })
  }
  //全选或全不选
  checkAllTodo = done => {
    const { todos } = this.state
    todos.forEach(it => {
      it.done = done
    })
    this.setState({
      todos,
    })
  }
  //清除已完成
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(it => {
      return it.done === false
    })
    this.setState({
      todos: newTodos,
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}></Header>
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            ></List>
            <Footer
              todos={todos}
              checkAllTodo={this.checkAllTodo}
              clearAllDone={this.clearAllDone}
            ></Footer>
          </div>
        </div>
      </div>
    )
  }
}
