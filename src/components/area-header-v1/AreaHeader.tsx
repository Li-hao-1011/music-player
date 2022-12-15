import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderWrapper } from './AreaHeader.style'

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  moreLink?: string
}
const FComponent: FC<IProps> = (props) => {
  const { title, moreText = '', moreLink = '' } = props
  return (
    <AreaHeaderWrapper>
      <span className="title">{title}</span>
      {moreText.length > 0 && moreLink.length > 0 && (
        <a className="look-more cursor-underline" href={moreLink}>
          {moreText}
        </a>
      )}
    </AreaHeaderWrapper>
  )
}

export const AreaHeader = memo(FComponent)
export default AreaHeader
