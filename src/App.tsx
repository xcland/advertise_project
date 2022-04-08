import React, { Component } from 'react'
import './style.scss'

interface Props {}

class App extends Component<Props> {
  render() {
    return (
      <div className="box">
        hello, React.
        <span>I am XCL, this is the first page</span>
      </div>
    )
  }
}

export default App
