import React from 'react'
import { Button } from 'antd'
import './style.scss'

interface IProps {}
interface IStates {
  accountStatus: number
  balance: number
  creditValue: number
}
const DONE = 1
const PROCESSING = 0
class Account extends React.Component<IProps, IStates> {
  state = {
    accountStatus: PROCESSING,
    balance: 0,
    creditValue: 0,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        accountStatus: 1,
        balance: 220,
        creditValue: 777,
      })
    }, 2000)
  }

  render(): React.ReactNode {
    const { accountStatus, balance, creditValue } = this.state
    return (
      <div className="account-component-box">
        <div>
          你好，wdnmd
          {name}
        </div>
        <div className="examine">
          {accountStatus === 0 ? (
            <div className="status">开户金未到</div>
          ) : (
            <div className="status-ok">开户金已到</div>
          )}
        </div>
        <div className="balance">
          <div>
            <div className="text">推广余额</div>
            <div className="value">{balance}</div>
          </div>
          <Button type="primary" size="small">
            充值
          </Button>
        </div>
        <div className="credit">
          <div>
            <div className="text">合规信用值</div>
            <div className="value">{creditValue}</div>
          </div>
          <div className="detail-text">详情</div>
        </div>
      </div>
    )
  }
}

export default Account
