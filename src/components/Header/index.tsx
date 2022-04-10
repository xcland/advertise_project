import React from 'react'
import ReactDOM from 'react-dom'

interface IProps {}

interface IStates {}

class Header extends React.Component<IProps, IStates> {
  state = {}
  render() {
    return (
      <div className="header-component-box">
        <div className="logo"></div>
        <div className="menu"></div>
        <div className="user-info"></div>
        这是 Header 组件
      </div>
    )
  }
}

export default Header
