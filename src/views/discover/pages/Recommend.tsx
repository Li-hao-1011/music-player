import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '../store/recommend'
import TopBanner from '../componentss/TopBanner'
interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner />
    </div>
  )
}

export const Recommend = memo(FComponent)
export default Recommend
