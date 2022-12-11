import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <div>Mine</div>
}

export const Mine = memo(FComponent)
export default Mine
