import React from 'react'
import './style.scss'

interface IProps {}
interface IStates {}

class IndexBanner extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    return <div>这是IndexBanner组件</div>
  }
}

export default IndexBanner
