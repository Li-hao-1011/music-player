import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './HotAnchor.style'
import { AreaHeader } from '@/components/area-header-v1/AreaHeader'
import { useAppSelector } from '@/store'
import { formatImageSize } from '@/utils/format'
import { hotRadios } from '../service/local-data'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeader title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export const HotAnchor = memo(FComponent)
export default HotAnchor
