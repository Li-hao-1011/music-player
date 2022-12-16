import { http } from '@/service/service'

export function getBanners() {
  return http.get<{ banners: any[]; code: number }>('/banner')
}

export function getHotRecommend() {
  return http.get<{ result: any[]; code: number }>('/personalized?limit=8')
}

export function getAlbum() {
  return http.get<{ albums: any[]; code: number }>('/album/newest')
}

export function getPlaylistDetail(id: number) {
  return http.get<{
    playlist: {
      id: number
      name: string
    }
  }>(`/playlist/detail`, { id }, { withCredentials: true })
}

export function getToplist() {
  return http.get<{ list: any[] }>('/toplist')
}

export function getSettleSinger() {
  return http.get<{ artists: any[]; code: number }>('/artist/list?limit=5')
}

export function getHotAnchor() {
  return http.get<{ data: { list: any[] } }>('/dj/toplist/hours?limit=5')
}
