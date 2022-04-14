import React from 'react'
import CardItem from './CardItem'
import './style.scss'
import { CardItemType } from './types'

interface IProps {
  cardData: Array<CardItemType>
  onChange?: (selectedId: string) => void
}
interface IStates {}

class CardTabs extends React.Component<IProps, IStates> {
  handleCardItemClick = (selectedId: string) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(selectedId)
    }
  }

  render(): React.ReactNode {
    const { cardData } = this.props

    return (
      <div className="search-page-card-tabs-component-box">
        {cardData.map((cardItem, index) => (
          <CardItem
            name={cardItem.name}
            currentValue={cardItem.currentValue}
            contemporaryValue={cardItem.contemporaryValue}
            isSelected={cardItem.isSelected}
            id={cardItem.id}
            onClick={(selectedId: string) => {
              this.handleCardItemClick(selectedId)
            }}
            key={`card-item${index.toString()}`}
          />
        ))}
      </div>
    )
  }
}

export default CardTabs
