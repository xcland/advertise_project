import React from 'react'
import './style.scss'

interface IProps {}
interface IStates {}

class PromotionCard extends React.Component<IProps, IStates> {
  state = {}
  render(): React.ReactNode {
    return <div>这是PromotionCard组件</div>
  }
}

export default PromotionCard
