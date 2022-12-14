import { http } from '@/service/service'

export function getBanners() {
  return http.get<{ banners: any[]; code: number }>('/banner')
}

export function getHotRecommend() {
  return http.get<{ result: any[]; code: number }>('/personalized?limit=8')
}
