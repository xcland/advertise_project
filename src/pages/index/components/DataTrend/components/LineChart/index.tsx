import React from 'react'
import { Line } from '@ant-design/charts'
import './style.scss'

interface IProps {
  chartData: Array<any>
}
interface IStates {}

const config: any = {
  // autoFit: true,
  height: 250,
  // data: null,
  xField: 'year',
  yField: 'value',
  label: {},
  point: {
    size: 2,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#5B8FF9',
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowBlur: 4,
        stroke: '#000',
        fill: 'red',
      },
    },
  },
  interactions: [{ type: 'marker-active' }],
}
class LineChart extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    const { chartData } = this.props
    config.data = chartData
    return (
      <div className="line-chart-component-box">
        <Line {...config} />
      </div>
    )
  }
}

export default LineChart
