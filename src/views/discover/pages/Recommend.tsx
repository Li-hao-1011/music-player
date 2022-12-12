import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { http } from '@/service/service'

interface Banner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url?: string
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([])
  useEffect(() => {
    http.get<{ banners: Banner[]; code: number }>('/banner').then((res) => {
      console.log('/banner1')
      console.log(res)
      setBanners(JSON.parse(JSON.stringify(res.data.banners)))
    })
  }, [])
  return (
    <div>
      Recommend
      <h3>{JSON.stringify(banners)}</h3>
    </div>
  )
}

export const Recommend = memo(FComponent)
export default Recommend
