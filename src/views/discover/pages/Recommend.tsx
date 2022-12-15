import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRankingDataAction, fetchRecommendDataAction } from '../store/recommend'
import TopBanner from '../componentss/TopBanner'
import { Content, RecommendLeft, RecommendRight } from './Recommend.style'
import { HotRecommend } from '../componentss/HotRecommend'
import { NewAlbum } from '../componentss/NewAlbum'
import { TopRanking } from '../componentss/TopRanking'
import { UserLogin } from '../componentss/UserLogin'
interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking></TopRanking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <div>入驻歌手</div>
          <div>登录</div>
        </RecommendRight>
      </Content>
    </div>
  )
}

export const Recommend = memo(FComponent)
export default Recommend
