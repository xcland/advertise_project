import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Account from './components/Account'
import DataTrend from '@components/DataTrend'
import UserProtrait from './components/UserPortrait'
import WaveAnalysis from './components/WaveAnalysis'
import Header from '@components/Header'
import AutoModal from './components/AutoModal'
import searchStore from './searchPromotion.store'
import globalStore from '../../store/global'

import './style.scss'
import { CardDataType } from '@components/DataTrend/types'
import Footer from '@components/Footer'
import { observer, Provider } from 'mobx-react'

interface IProps extends RouteComponentProps {}

const cardData: Array<CardDataType> = [
  {
    id: '1',
    name: '消费（元）',
    value: 2000,
    persent: '',
    icon: 'assets/imgs/card-icon1',
    isSelected: true,
  },
  {
    id: '2',
    name: '展现（次）',
    value: 5988,
    persent: '',
    icon: 'assets/imgs/card-icon2',
    isSelected: false,
  },
  {
    id: '3',
    name: '点击（次）',
    value: 199,
    persent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
  {
    id: '4',
    name: '展现人数（人）',
    value: 20000,
    persent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
  {
    id: '5',
    name: '点击人数（人）',
    value: 8000,
    persent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
]
@observer
class SearchPromotionPage extends React.Component<IProps> {
  state = {
    autoModalShow: true,
  }

  componentDidMount = () => {
    searchStore.getExpiredPlanList()
  }

  handleAutoModalClick = (type: number, values?: any) => {
    // // searchStore.modalShow = false;
    this.setState({
      autoModalShow: false,
    })
    // searchStore.modalShow = false
  }

  render(): React.ReactNode {
    const { history } = this.props
    const { autoModalShow } = this.state
    const { modalShow } = searchStore
    return (
      <Provider store={searchStore} globalStore={globalStore}>
        <div className="search-promotion-page-box">
          <div className="header">
            <Header history={history} />
          </div>
          <div className="content">
            <div className="account-box">
              <Account />
            </div>
            <div className="data-trend-box">
              <div className="data-trend-title">数据趋势</div>
              <DataTrend cardData={cardData} />
            </div>
            <div className="wave-analysis-box">
              <div className="title">波动分析</div>
              <WaveAnalysis />
            </div>
            <div className="user-portrait-box">
              <div className="title">用户画像</div>
              <UserProtrait></UserProtrait>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
          <AutoModal
            visible={autoModalShow}
            onBtnClick={this.handleAutoModalClick}
          ></AutoModal>
        </div>
      </Provider>
    )
  }
}

export default SearchPromotionPage
