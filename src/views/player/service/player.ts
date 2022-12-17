import { http } from '@/service/service'

export function getSongUrl(id: number) {
  return http.get<{ data: { id: number; url: string }[] }>(`/song/url?id=${id}`)
}
