import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import { calcCount } from '@/store/modules/counter'
import Header from '@/components/Header/AppHeader'
import Footer from '@/components/Footer/AppFooter'

function App() {
  return (
    <>
      <Header />
      <Suspense fallback="">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
