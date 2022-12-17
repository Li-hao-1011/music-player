import { http } from '@/service/service'

/**
 * 歌曲URL
 * @param id
 * @returns
 */
export function getSongUrl(id: number) {
  return http.get<{ data: { id: number; url: string }[] }>(`/song/url?id=${id}`)
}

/**
 * 歌曲详情
 * @param id
 * @returns
 */
export function getSongInfo(id: number) {
  return http.get(`/song/detail?ids=${id}`)
}
