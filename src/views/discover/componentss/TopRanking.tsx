import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './TopRanking.style'
import { AreaHeaderRmd } from '@/components/area-header-rmd/AreaHeaderRmd'
import { appShallowEqual, useAppSelector } from '@/store'
import { TopRankingItem } from './TopRankingItem'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    appShallowEqual
  )
  return (
    <TopRankingWrapper>
      <AreaHeaderRmd title="榜单" moreText="更多" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => (
          /*           <div key={item.id} className="item">
            {item.name}
          </div> */
          <TopRankingItem key={item.id} item={item} />
        ))}
      </div>
    </TopRankingWrapper>
  )
}

export const TopRanking = memo(FComponent)
export default TopRanking
