import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './HotRecommend.style'
import { AreaHeaderRmd } from '@/components/area-header-rmd/AreaHeaderRmd'
import { useAppSelector } from '@/store'
import { SongItem } from '@/components/song-item/SongItem'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { recommendSongs } = useAppSelector((state) => ({
    recommendSongs: state.recommend.recommendSongs
  }))
  return (
    <HotRecommendWrapper>
      <AreaHeaderRmd
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreText="更多"
      />
      <div className="hot-recommend-list">
        {recommendSongs.map((item) => {
          return <SongItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export const HotRecommend = memo(FComponent)
export default HotRecommend
