import { http } from '@/service/service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getAlbum,
  getBanners,
  getHotRecommend,
  getPlaylistDetail,
  getToplist
} from '../service/recommend'
type IInitialState = {
  banners: any[]
  recommendSongs: any[]
  newAlbums: any[]
  rankings: any[]

  upRanking: any[]
  newRanking: any[]
  originRanking: any[]
}
const initialState: IInitialState = {
  banners: [],
  recommendSongs: [],
  newAlbums: [],
  rankings: [],

  upRanking: [],
  newRanking: [],
  originRanking: []
}

export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_arg, { dispatch }) => {
  getBanners()
    .then((res) => {
      dispatch(setBannersAction(res.data.banners))
    })
    .catch(() => {
      dispatch(setBannersAction([]))
    })

  getHotRecommend()
    .then((res) => {
      dispatch(setRecommendSongAction(res.data?.result ?? []))
    })
    .catch(() => {
      dispatch(setRecommendSongAction([]))
    })

  getAlbum()
    .then((res) => {
      dispatch(setNewAlbumsAction(res.data.albums))
    })
    .catch(() => {
      dispatch(setNewAlbumsAction([]))
    })
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async (_arg, { dispatch }) => {
    const res = await getToplist()
    const rankingList = res.data.list.slice(0, 3)

    const promise: Promise<any>[] = []
    for (const top of rankingList) {
      promise.push(getPlaylistDetail(top.id))
    }
    Promise.all(promise).then((res) => {
      dispatch(setRankingsAction(res.map((item) => item.data.playlist)))
    })
  }
)

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
<<<<<<< HEAD
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
    },
    setRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
})

export const { setBannersAction, setRecommendSongAction, setNewAlbumsAction, setRankingsAction } =
  recommendSlice.actions
export const recommendReducer = recommendSlice.reducer
