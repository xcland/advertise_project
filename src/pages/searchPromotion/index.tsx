import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Account from './components/Account'
import DataTrend from './components/DataTrend'
import UserProtrait from './components/UserProtrait'
import WaveAnalysis from './components/WaveAnalysis'
import './style.scss'

interface IProps extends RouteComponentProps {}

class SearchPromotionPage extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className="search-promotion-page-box">
        <div className="header"></div>
        <div className="content">
          <div className="account-box">
            <Account />
          </div>
          <div className="data-trend-box">
            <DataTrend />
          </div>
          <div className="wave-analysis-box">
            <WaveAnalysis />
          </div>
          <div className="user-protrait-box">
            <UserProtrait></UserProtrait>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default SearchPromotionPage
