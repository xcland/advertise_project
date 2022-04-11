import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import './style.scss'
import { MENU_INDEX_CONFIG } from '@constants/menu'
import MenuItem from './MenuItem'
interface IProps {}

interface IStates {}

class Header extends React.Component<IProps, IStates> {
  state = {}
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
