import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { Discover } from '@/views/Discover'

export const routes: RouteObject[] = [{ path: '/discover', element: <Discover /> }]

// export const Routers = useRoutes(routes)
