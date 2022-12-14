import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction, fetchHotRecommendDataAction } from '../store/recommend'
import TopBanner from '../componentss/TopBanner'
import { Content, RecommendLeft, RecommendRight } from './Recommend.style'
import { HotRecommend } from '../componentss/HotRecommend'
interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
        </RecommendLeft>
        <RecommendRight>RecommendRight</RecommendRight>
      </Content>
    </div>
  )
}

export const Recommend = memo(FComponent)
export default Recommend
