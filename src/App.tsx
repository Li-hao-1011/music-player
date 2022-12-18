import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import Header from '@/components/header/AppHeader'
import Footer from '@/components/footer/AppFooter'
import { AppPlayerBar } from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  // 获取一首喜欢的歌
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(33894312))
  })
  return (
    <>
      <Header />
      <Suspense fallback="">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
      {/* 播放器 */}
      <AppPlayerBar />
    </>
  )
}

export default App
