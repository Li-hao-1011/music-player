import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapper } from './HotAnchor.style'
import { AreaHeader } from '@/components/area-header-v1/AreaHeader'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeader title="热门主播" />
      主播
    </HotAnchorWrapper>
  )
}

export const HotAnchor = memo(FComponent)
export default HotAnchor
