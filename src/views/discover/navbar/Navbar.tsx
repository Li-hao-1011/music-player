import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { discoverMenu } from '@/assets/data/local_data'
import { NavbarWrapper } from './style'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <NavbarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavbarWrapper>
  )
}

export const Navbar = memo(FComponent)
export default Navbar
