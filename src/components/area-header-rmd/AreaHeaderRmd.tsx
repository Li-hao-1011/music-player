import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderRmdWrappre } from './AreaHeaderRmd.style'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}
const FComponent: FC<IProps> = (props) => {
  const { title, keywords = [], moreText = '更多', moreLink = '' } = props
  return (
    <AreaHeaderRmdWrappre className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <NavLink className="link" to={moreLink}>
          {moreText}
        </NavLink>
        <i className="sprite_02 icon"></i>
      </div>
    </AreaHeaderRmdWrappre>
  )
}

export const AreaHeaderRmd = memo(FComponent)
export default AreaHeaderRmd
