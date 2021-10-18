/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import PubSub from "pubsub-js"
import "./index.css"
export default class index extends Component {
  state = {
    keyWord: [],
  }
  componentDidMount() {
    // 订阅消息，挂载完毕时
    this.token = PubSub.subscribe("name", (msg, data) => {
      this.setState({
        keyWord: data,
      })
    })
  }
  // 取消订阅,组件销毁之前
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div className="row">
        {this.state.keyWord.map(it => {
          return (
            <div className="card" key={it.id}>
              <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                <img alt="avatar" src={it.avatar_url} style={{ width: 100 }} />
              </a>
              <p className="card-text">{it.login}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
