import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/store/index'
import { calcCount } from '@/store/modules/counter'

function App() {
  const selector = useAppSelector(
    (state) => ({
      count: state.counter.counter
    }),
    appShallowEqual
  )
  const dispatch = useAppDispatch()
  return (
    <>
      <Suspense fallback="">
        <h2>当前计数:{selector.count}</h2>
        <button onClick={() => dispatch(calcCount(1))}>++++1</button>
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
    </>
  )
}

export default App
