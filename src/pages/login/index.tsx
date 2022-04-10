import React, { Component } from 'react'
import '../../style.scss'
import utilsIndex from '@utils/index'
interface Props {}

class LoginPage extends Component<Props> {
  componentDidMount() {
    const id = utilsIndex.getUrlParam('id')
    console.log('id', id)
  }

  render() {
    return (
      <div className="box">
        hello, React.
        <span>here is login page</span>
      </div>
    )
  }
}

export default LoginPage
