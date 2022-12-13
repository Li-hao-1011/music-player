import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppHeader, HeaderLeft, HeaderRight } from './style'
import { NavLink } from 'react-router-dom'
import HeaderTitles from '@/assets/data/header.title.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={item.link}>
          {item.title}
          <i className="icon sprite_01 "></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <>
      <AppHeader>
        <div className="content">
          <HeaderLeft>
            <a className="logo sprite_01" href="/#">
              网易云音乐
            </a>
            <div className="title-list">
              {HeaderTitles.map((item) => {
                return (
                  <div key={item.title} className="item">
                    {showItem(item)}
                  </div>
                )
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input
              className="search"
              size="large"
              placeholder="音乐/视频/电台"
              prefix={<SearchOutlined />}
            />
            <span className="center">创作者中心</span>
            <span className="login">登录</span>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </AppHeader>
    </>
  )
}

export const Header = memo(FComponent)
export default Header
