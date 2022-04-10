import React, { Component } from 'react'
import axios from 'axios'
import { Button, DatePicker } from 'antd'
import moment from 'moment'
import './style.scss'

interface Props {}

class IndexPage extends Component<Props> {
  componentDidMount() {
    axios
      .get('/ad/index/gray')
      .then((response) => {
        console.log('res', response)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleDate = (date: moment.Moment | null) => {
    console.log(moment(date).unix())
  }

  render() {
    return (
      <div className="index-page">
        hello, React.
        <div className="middle-box">
          <span>here is index page</span>
          <Button type="primary">按钮</Button>
        </div>
        <div>
          <DatePicker onChange={this.handleDate} />
        </div>
      </div>
    )
  }
}

export default IndexPage
