import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <div>Artist</div>
}

export const Artist = memo(FComponent)
export default Artist
