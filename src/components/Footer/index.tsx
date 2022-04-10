import React from 'react'
import './style.scss'

interface IProps {}
interface IStates {}

class Footer extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    return <div>这是Footer组件</div>
  }
}

export default Footer
