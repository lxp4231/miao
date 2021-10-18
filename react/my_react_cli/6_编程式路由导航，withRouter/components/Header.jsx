import React, { Component } from "react"
import { withRouter } from "react-router-dom"
class Header extends Component {
  forward = () => {
    this.props.history.goForward()
  }
  back = () => {
    this.props.history.goBack()
  }
  render() {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
          <button onClick={this.forward}>go</button>
          <button onClick={this.back}>back</button>
        </div>
      </div>
    )
  }
}
// withRouter 使用
export default withRouter(Header)
