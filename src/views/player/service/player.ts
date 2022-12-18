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
  return http.get<{ songs: any[]; code: number }>(`/song/detail?ids=${id}`)
}

/**
 * 获取歌词
 * @param id
 * @returns
 */
export function getSongLyric(id: number) {
  return http.get<{ lrc: { lyric: string } }>(`/lyric?id=${id}`)
}
