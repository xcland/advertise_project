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
    chartData: [
      {
        year: '2011',
        value: 3,
      },
      {
        year: '2012',
        value: 4,
      },
      {
        year: '2013',
        value: 3.5,
      },
      {
        year: '2014',
        value: 5,
      },
      {
        year: '2015',
        value: 4.9,
      },
      {
        year: '2016',
        value: 6,
      },
      {
        year: '2017',
        value: 7,
      },
      {
        year: '2018',
        value: 9,
      },
      {
        year: '2019',
        value: 13,
      },
    ],
  }

  handleTabsChange = (selectedId: string) => {
    const { cardData, chartData } = this.state
    const newCardData = cardData.map((data: CardItemType) => ({
      ...data,
      isSelected: data.id === selectedId,
    }))
    // 模拟数据改变
    this.setState({
      cardData: newCardData,
      chartData: chartData.map((data) => ({
        ...data,
        value: (data.value += 2),
      })),
    })
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
          <LineChart chartData={this.state.chartData} />
        </div>
      </div>
    )
  }
}

export default Chart
