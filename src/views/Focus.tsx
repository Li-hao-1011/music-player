import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <div>Focus</div>
}

export const Focus = memo(FComponent)
export default Focus
