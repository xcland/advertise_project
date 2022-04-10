import React from 'react'
import './style.scss'

interface IProps {}
interface IStates {}

class Account extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    return <div>这是Account组件</div>
  }
}

export default Account
