import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import './style.scss'
import { MENU_INDEX_CONFIG } from '@constants/menu'
import MenuItem from './MenuItem'
interface IProps {
  history?: any
}

interface IStates {}

class Header extends React.Component<IProps, IStates> {
  state = {}

  handleClick = (url: string | undefined) => {
    const { history } = this.props
    if (url && history) {
      history.push(url)
    }
  }

  render() {
    const userName = 'wdnmd'
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo"></div>
          <div className="menu">
            {MENU_INDEX_CONFIG.map((menuItem, index) => (
              <MenuItem
                menuItemInfo={menuItem}
                isActive={menuItem.isActive}
                key={`index-menuItem${index.toString()}`}
                onClick={(url: string | undefined) => {
                  this.handleClick(url)
                }}
              />
            ))}
          </div>
        </div>
        <div className="user-info">
          <UserOutlined /> &nbsp;
          <span>{userName}</span>
        </div>
      </div>
    )
  }
}

export default Header
