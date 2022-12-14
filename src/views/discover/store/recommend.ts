import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAlbum, getBanners, getHotRecommend } from '../service/recommend'
type IInitialState = {
  banners: any[]
  recommendSongs: any[]
  newAlbums: any[]
}
const initialState: IInitialState = {
  banners: [],
  recommendSongs: [],
  newAlbums: []
}

export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_arg, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(setBannersAction(res.data.banners))
  })
  getHotRecommend().then((res) => {
    dispatch(setRecommendSongAction(res.data?.result ?? []))
  })
  getAlbum().then((res) => {
    dispatch(setNewAlbumsAction(res.data.albums))
  })
})

/* export const fetchBannerDataAction = createAsyncThunk('banners', async (_arg, { dispatch }) => {
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

export const fetchAlbumDataAction = createAsyncThunk('newAlbum', async (_arg, { dispatch }) => {
  const res = await getAlbum()
  dispatch(setNewAlbumsAction(res.data.albums))
}) */

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannersAction(state, { payload }) {
      state.banners = payload
    },
    setRecommendSongAction(state, { payload }) {
      state.recommendSongs = payload
    },
    setNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
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

export const { setBannersAction, setRecommendSongAction, setNewAlbumsAction } =
  recommendSlice.actions
export const recommendReducer = recommendSlice.reducer
