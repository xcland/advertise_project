import React from 'react'
import { MenuItemInfoType } from './types'
import {} from 'antd'
import './style.scss'

interface IProps {
  isActive?: boolean
  onClick?: (url?: string | undefined) => void
  menuItemInfo: MenuItemInfoType
}
interface IStates {}

class MenuItem extends React.Component<IProps, IStates> {
  handleMenuClick = (url: string | undefined) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(url)
    }
  }

  render(): React.ReactNode {
    const { menuItemInfo, isActive } = this.props
    return (
      <div className="index-menuItem-component-box">
        <div
          className="menu-item-title"
          onClick={() => {
            this.handleMenuClick(menuItemInfo.url)
          }}
        >
          {menuItemInfo.name}
          {menuItemInfo.menuChildren.length > 0 && (
            <span className="arrow-icon"> </span>
          )}
        </div>
        <div className="bottom-line"> </div>
        {isActive && <div className="bottom-line-active"> </div>}
        {menuItemInfo.menuChildren.length > 0 && (
          <div className="menu-children-box">
            {menuItemInfo.menuChildren.map((menuChild, index) => (
              <div className="menu-child" key={`menu-child${index.toString()}`}>
                <span
                  onClick={() => {
                    this.handleMenuClick(menuChild.url)
                  }}
                >
                  {menuChild.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default MenuItem
