import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <div>Djradio</div>
}

export const Djradio = memo(FComponent)
export default Djradio
