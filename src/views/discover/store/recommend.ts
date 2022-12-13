import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'
type IInitialState = {
  banners: any[]
}
const initialState: IInitialState = {
  banners: []
}

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners()
  console.log('res', res.data)
  dispatch(setBannersAction(res.data.banners))
  // return res.data
})

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  /*   extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, (state, { payload }) => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        console.log('fu', payload)

        // state.banners = (payload as { banners: any[] }).banners
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected')
      })
  } */
})

export const { setBannersAction } = recommendSlice.actions
export const recommendReducer = recommendSlice.reducer
