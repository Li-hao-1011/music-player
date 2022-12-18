import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ApplyricWrapper } from './style'
import { text } from 'stream/consumers'

interface IProps {
  children?: ReactNode
  text: string
  isShow: boolean
}
const FComponent: FC<IProps> = (props) => {
  const { text = '', isShow = false } = props
  return (
    <ApplyricWrapper>
      {isShow && <div className="lyric">{text.length !== 0 ? text : '暂无歌词'}</div>}
    </ApplyricWrapper>
  )
}

export const Applyric = memo(FComponent)
export default Applyric
