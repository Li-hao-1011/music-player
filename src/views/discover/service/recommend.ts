import { http } from '@/service/service'
export function getBanners() {
  return http.get<{ banners: any[]; code: number }>('/banner')
}
