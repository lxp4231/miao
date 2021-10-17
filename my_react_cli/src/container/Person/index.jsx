import React, { Component } from "react"
import { nanoid } from "nanoid"
// 引入react-redux的connect，用于链接redux与UI组件
import { connect } from "react-redux"
import createPersonAction from "../../Redux/actions/person"

class person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    // 添加
    this.props.add({ id: nanoid(), name, age })
  }
  render() {
    return (
      <div>
        <h3>person组件</h3>
        <input type="text" placeholder="name" ref={c => (this.nameNode = c)} />
        <input type="text" placeholder="age" ref={c => (this.ageNode = c)} />
        <button onClick={this.addPerson}>添加信息</button>
        <ul>
          {this.props.person.map(it => {
            return (
              <li key={it.id}>
                name:{it.name}---age:{it.age}
              </li>
            )
          })}
        </ul>
        <h4>上方组件的和为：{this.props.count}</h4>
      </div>
    )
  }
}
// 容器组件(用于和store通讯)
export default connect(
  state => ({
    //state是总的状态，可以拿到任意被state管理的状态
    person: state.personReducer,
    count: state.countReducer,
  }),
  {
    add: createPersonAction,
  }
)(person)
