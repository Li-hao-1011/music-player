import { createSlice } from '@reduxjs/toolkit'

const counterSplice = createSlice({
  name: 'counter',
  initialState: { counter: 89 },
  reducers: {
    calcCount(state, action) {
      state.counter += action.payload
    }
  }
})

export const counterReducers = counterSplice.reducer
export const { calcCount } = counterSplice.actions
