import React, { Component } from "react"
import axios from "axios"
export default class app extends Component {
  getStudentInfo = () => {
    axios
      .get("http://localhost:3000/api1/students") //先去本地请求，本地3000通过代理去请求5000
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  getCarInfo = () => {
    axios
      .get("http://localhost:3000/api2/cars")
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}>Student</button>
        <button onClick={this.getCarInfo}>Car</button>
      </div>
    )
  }
}
