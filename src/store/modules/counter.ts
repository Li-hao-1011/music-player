import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ICounter = {
  counter: number
}

const initialState: ICounter = { counter: 89 }

const counterSplice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    calcCount(state, action: PayloadAction<number>) {
      state.counter += action.payload
    }
  }
})

export const counterReducers = counterSplice.reducer
export const { calcCount } = counterSplice.actions
