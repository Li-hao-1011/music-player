import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from '../store/recommend'
import TopBanner from '../componentss/TopBanner'
import { Content, RecommendLeft, RecommendRight } from './Recommend.style'
import { HotRecommend } from '../componentss/HotRecommend'
import { NewAlbum } from '../componentss/NewAlbum'
interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>RecommendRight</RecommendRight>
      </Content>
    </div>
  )
}

export const Recommend = memo(FComponent)
export default Recommend
