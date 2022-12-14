import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongItemWrapper } from './SongItem.style'
import { formatCount, formatImageSize } from '@/utils/format'

interface IItemData {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

interface IProps {
  children?: ReactNode
  itemData: IItemData
}
const FComponent: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <SongItemWrapper>
      <div className="cover-top">
        {/* <img src={`${itemData.picUrl}?param=140y140`} alt="" /> */}
        <img src={formatImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span className="count">
              <i className="sprite_icon erji"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom cursor-underline">{itemData.name}</div>
    </SongItemWrapper>
  )
}

export const SongItem = memo(FComponent)
export default SongItem
