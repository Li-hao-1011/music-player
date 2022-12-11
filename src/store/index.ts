import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import { counterReducers } from './modules/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducers
  }
})

export type IRootStore = ReturnType<typeof store.getState>
// TypedUseSelectorHook 函数签名
export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const appShallowEqual = shallowEqual
