import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import Header from '@/components/header/AppHeader'
import Footer from '@/components/footer/AppFooter'
import { AppPlayerBar } from './views/player/app-player-bar'

function App() {
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
