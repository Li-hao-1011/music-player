import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import { counterReducers } from './modules/counter'
import { recommendReducer } from '@/views/discover/store/recommend'
import { playerReducer } from '@/views/player/store/player'

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    recommend: recommendReducer,
    player: playerReducer
  }
})

export type IRootStore = ReturnType<typeof store.getState>
// TypedUseSelectorHook 函数签名
export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const appShallowEqual = shallowEqual
