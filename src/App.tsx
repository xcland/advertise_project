import React, { Component } from 'react'
import './style.scss'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {}

class App extends Component<Props> {
  handleRoute = () => {
    const { location, history } = this.props
    const { pathname } = location
    // auto redirect to index
    if (pathname === '/') {
      history.push('index')
    }
    return true
  }
  render() {
    const { children } = this.props
    return <div>{this.handleRoute() ? children : 'other'}</div>
  }
}

export default App
