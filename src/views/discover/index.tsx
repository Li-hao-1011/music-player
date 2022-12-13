import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar/Navbar'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export const Discover = memo(FComponent)

export default Discover
