import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import { formatImageSize } from '@/utils/format'

export interface IItemData {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: Artist
  songs: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist2[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: string[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str: string
  img1v1Id_str: string
}

export interface Artist2 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  img1v1Id_str: string
}

interface IProps {
  children?: ReactNode
  itemData: IItemData
}
const FComponent: FC<IProps> = (props) => {
  const { itemData } = props

  const themt = { size: '100px', width: '118px', bgp: '-570px' }

  return (
    <NewAlbumItemWrapper size={themt.size} width={themt.width} bgp={themt.bgp}>
      <div className="album-image">
        <img src={formatImageSize(itemData.blurPicUrl, 100)} alt={itemData.company} />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.company}</div>
      </div>
      {itemData.name}
    </NewAlbumItemWrapper>
  )
}

export const NewAlbumItem = memo(FComponent)
export default NewAlbumItem
