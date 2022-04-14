import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { RouteComponentProps } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Chart from '@components/DataTrend'
import PromotionCard from './components/PromotionCard'
import ProductCard from './components/ProductCard'
import Account from './components/Account'
import IndexBanner from './components/IndexBanner'
import ProductNews from './components/ProductNews'
import { Select, DatePicker } from 'antd'
import './style.scss'

const { Option } = Select

interface Props extends RouteComponentProps {}

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
    const { history } = this.props
    return (
      <div className="index-page">
        <div className="head-box">
          <Header />
        </div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">
              <div className="header-box">
                <div className="title">数据趋势</div>
                <div className="select-area">
                  <Select
                    defaultValue="0"
                    style={{ width: 120 }}
                    // onChange={this.handlePromotionChange}
                    size="small"
                  >
                    <Option value="0">全部推广产品</Option>
                    <Option value="1">搜索推广</Option>
                    <Option value="2">一站式推广</Option>
                    <Option value="3">合约推广</Option>
                    <Option value="4">知识营销</Option>
                  </Select>
                  <DatePicker
                    // onChange={this.handalDateChange}
                    size="small"
                    style={{ marginLeft: 10 }}
                    placeholder="请选择日期"
                  />
                </div>
              </div>
              <Chart />
            </div>
            <div className="promotion-card-area">
              <PromotionCard history={history} />
            </div>
            <div className="product-card-area">
              <ProductCard />
            </div>
          </div>
          <div className="right-content">
            <div className="account-area">
              <Account />
            </div>
            <div className="index-banner-area">
              <IndexBanner />
            </div>
            <div className="product-news-area">
              <ProductNews />
            </div>
          </div>
        </div>
        <div className="footer-box">
          <Footer />
        </div>
      </div>
    )
  }
}

export default IndexPage
