import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'
type IInitialState = {
  banners: any[]
  recommendSongs: any[]
}
const initialState: IInitialState = {
  banners: [],
  recommendSongs: []
}

export const fetchBannerDataAction = createAsyncThunk('banners', async (_arg, { dispatch }) => {
  const res = await getBanners()
  dispatch(setBannersAction(res.data.banners))
})

export const fetchHotRecommendDataAction = createAsyncThunk(
  'hotRecommend',
  async (_arg, { dispatch }) => {
    const res = await getHotRecommend()
    dispatch(setRecommendSongAction(res.data?.result ?? []))
  }
)

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannersAction(state, { payload }) {
      state.banners = payload
    },
    setRecommendSongAction(state, { payload }) {
      state.recommendSongs = payload
    }
  }
  /*
  extraReducers: (builder) => {
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

export const { setBannersAction, setRecommendSongAction } = recommendSlice.actions
export const recommendReducer = recommendSlice.reducer
