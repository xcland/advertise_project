import React from 'react'
import { Empty } from 'antd'
import './style.scss'

interface IProps {}
interface IStates {}

class UserPortrait extends React.Component<IProps, IStates> {
  state = {
    isEmpty: true,
  }

  componentDidMount() {
    // do some http request
  }

  render(): React.ReactNode {
    const { isEmpty } = this.state
    return (
      <div className="user-portrait-component-box">
        {isEmpty ? (
          <Empty description="广告展现累积用户过少，无法得出准确用户画像" />
        ) : (
          <div>用户信息</div>
        )}
      </div>
    )
  }
}

export default UserPortrait
