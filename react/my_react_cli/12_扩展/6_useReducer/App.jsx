import React, { Component } from "react"
import Demo from "./component/index"
import Reducer from "./component/reducer"
export default class app extends Component {
  render() {
    return (
      <div>
        <Demo></Demo>
        <hr />
        <Reducer></Reducer>
      </div>
    )
  }
}
