import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return <PlayerWrapper>Player</PlayerWrapper>
}

export const Player = memo(FComponent)
export default Player
