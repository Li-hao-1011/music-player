import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from './SettleSinger.style'
import { AreaHeader } from '@/components/area-header-v1/AreaHeader'
import { useAppSelector } from '@/store'
import { formatImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { settleSinger } = useAppSelector((state) => ({
    settleSinger: state.recommend.settleSingers
  }))
  return (
    <SettleSingerWrapper>
      <AreaHeader title="入驻歌手" moreText="全部查看&nbsp;&gt;" moreLink="/discover/artist" />
      <ul className="artists">
        {settleSinger.map((item) => {
          return (
            <li className="artists-item" key={item.id}>
              <a href="">
                <div className="head">
                  <img src={item.img1v1Url} alt="" />
                </div>
                <div className="info">
                  <h4 className="title">{item.name}</h4>
                  <p className="name text-nowrap">{item.alias.join(' ')}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export const SettleSinger = memo(FComponent)
export default SettleSinger
