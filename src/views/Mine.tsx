import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <div>
      Mine
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  )
}

export const Mine = memo(FComponent)
export default Mine
