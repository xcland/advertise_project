import React from 'react'
import './style.scss'
import { CardItemType } from './types'

interface IProps extends CardItemType {}
interface IStates {}

class CardItem extends React.Component<IProps, IStates> {
  handleClick = (id: string) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(id)
    }
  }

  render(): React.ReactNode {
    const { name, currentValue, contemporaryValue, id, isSelected } = this.props
    // eslint-disable-next-line
    const cardItemStyle = isSelected
      ? 'search-page-card-item-component-box search-page-card-item-selected'
      : 'search-page-card-item-component-box'
    return (
      <div
        className={cardItemStyle}
        onClick={() => {
          this.handleClick(id)
        }}
      >
        <div className="info">
          <div className="name-persent">
            <div className="name">{name}</div>
            <div className="persent">{currentValue}</div>
          </div>
          <div className="value">
            <div>
              <span>
                当期：
                {currentValue}
              </span>
              <span>
                同期：
                {contemporaryValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardItem
