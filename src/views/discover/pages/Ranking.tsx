import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <div>Ranking</div>
}

export const Ranking = memo(FComponent)
export default Ranking
