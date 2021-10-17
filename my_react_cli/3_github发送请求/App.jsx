/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import Search from "./components/Search"
import List from "./components/List"
import "./App.css"
export default class app extends Component {
  // state = {
  //   keyWord: [],
  // }
  // getKeyWord = val => {
  //   this.setState({
  //     keyWord: val,
  //   })
  // }
  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    )
  }
}
