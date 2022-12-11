import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// import { Discover } from '@/views/Discover'
// import { Mine } from '@/views/Mine'

const Discover = lazy(() => import(`@/views/discover/index`))
const Mine = lazy(() => import('@/views/Mine'))
const Download = lazy(() => import('@/views/Download'))
const Focus = lazy(() => import('@/views/Focus'))
const Recommend = lazy(() => import('@/views/discover/pages/Recommend'))
const Ranking = lazy(() => import('@/views/discover/pages/Ranking'))
const Djradio = lazy(() => import('@/views/discover/pages/Djradio'))
const Artist = lazy(() => import('@/views/discover/pages/Artist'))
const Album = lazy(() => import('@/views/discover/pages/Album'))
const Songs = lazy(() => import('@/views/discover/pages/Songs'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover/', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> },
      { path: '/discover/songs', element: <Songs /> }
    ]
  },
  { path: '/mine', element: <Mine /> },
  { path: '/download', element: <Download /> },
  { path: '/focus', element: <Focus /> }
]

// export const Routers = useRoutes(routes)
