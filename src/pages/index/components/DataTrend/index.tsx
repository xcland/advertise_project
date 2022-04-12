import React from 'react'
import CardTabs from './components/CardTabs'
import LineChart from './components/LineChart'
import { CardItemType } from './components/CardTabs/types'
import './style.scss'

interface IProps {
  cardData?: any
}
interface IStates {}

const defaultCardData = [
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
    persent: 88.9,
    icon: 'assets/imgs/card-icon2',
    isSelected: false,
  },
  {
    id: '3',
    name: '点击（次）',
    value: 199,
    persent: 12.6,
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
]

class Chart extends React.Component<IProps, IStates> {
  state = {
    cardData: this.props.cardData || defaultCardData,
  }
  render(): React.ReactNode {
    const { cardData } = this.state
    return (
      <div className="data-trend-component-box">
        <div className="card-tabs-box">
          <CardTabs
            cardData={cardData}
            onChange={(selectedId: string) => {
              this.handleTabsChange(selectedId)
            }}
          />
        </div>
        <div className="line-chart-box">
          <LineChart />
        </div>
      </div>
    )
  }
  handleTabsChange = (selectedId: string) => {
    const { cardData } = this.state
    const newCardData = cardData.map((data: CardItemType) => ({
      ...data,
      isSelected: data.id === selectedId,
    }))
    this.setState({
      cardData: newCardData,
    })
  }
}

export default Chart
