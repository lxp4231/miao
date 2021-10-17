import React, { Component } from "react"
// import qs from "querystring"
export default class index extends Component {
  state = {
    msg: [
      { id: "001", content: "hello1" },
      { id: "002", content: "hello2" },
      { id: "003", content: "hello3" },
    ],
  }
  render() {
    console.log(this.props) //参数都在props中，location
    // 接收params参数
    const { id, title } = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state参数
    // const { id, title } = this.props.location.state || {}//因为存放在本地，考虑到数据清除后为空
    const findResult =
      this.state.msg.find(detailObj => {
        return detailObj.id === id
      }) || {}
    return (
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{findResult.content}</li>
      </ul>
    )
  }
}
