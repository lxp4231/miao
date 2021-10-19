import React from "react"
import Font from "./component/Font"
import Button from "./component/Button"
import { Reducer } from "./component/Reducer"
export default function App() {
  return (
    <div>
      <Reducer>
        <Font></Font>
        <Button></Button>
      </Reducer>
    </div>
  )
}
