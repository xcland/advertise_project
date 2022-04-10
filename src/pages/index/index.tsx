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
        <div className="head-box">header</div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">chart</div>
            <div className="promotion-card-area">promotion card</div>
            <div className="product-card-area">product card</div>
          </div>
          <div className="right-content">
            <div className="account-area">account</div>
            <div className="index-banner-area">index banner</div>
            <div className="product-news-area">product news</div>
          </div>
        </div>
        <div className="footer-box">footer</div>
      </div>
    )
  }
}

export default IndexPage
