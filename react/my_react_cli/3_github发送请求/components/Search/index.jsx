import React, { Component } from "react"
import axios from "axios"
import PubSub from "pubsub-js"
export default class index extends Component {
  state = {
    keyWord: "",
  }
  res = event => {
    this.setState({
      keyWord: event.target.value,
    })
  }
  search = () => {
    const { keyWord } = this.state
    axios
      .get(`/api1/search/users?q=${keyWord}`)
      .then(res => {
        const { items } = res.data
        //消息订阅发布 直接实现兄弟组件通讯
        PubSub.publish("name", items)
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.res}
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
