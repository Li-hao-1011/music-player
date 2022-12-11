import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <div>
      <h2>Discover</h2>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export const Discover = memo(FComponent)

export default Discover
