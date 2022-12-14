import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderRmd } from '@/components/area-header-rmd/AreaHeaderRmd'
import { NewAlbumWrapper } from './NewAlbum.style'
import { Carousel } from 'antd'
import { appShallowEqual, useAppSelector } from '@/store'
import { NewAlbumItem } from '@/components/new-album-item/NewAlbumItem'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { newAlbums } = useAppSelector(
    (state) => ({ newAlbums: state.recommend.newAlbums }),
    appShallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrevClick = () => {
    carouselRef.current?.prev()
  }
  const handleNextClick = () => {
    carouselRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderRmd title="新碟上架" moreText="更多" moreLink="/discover/album" />
      <div className="content">
        <button onClick={() => handlePrevClick()} className="arrow arrow-left sprite_02"></button>
        <div className="album">
          <Carousel autoplay autoplaySpeed={100000} ref={carouselRef} dots={false} speed={1500}>
            {[0, 1].map((index) => {
              return (
                <div key={index} className="page">
                  {newAlbums.slice(index * 5, (index + 1) * 5).map((album) => {
                    return <NewAlbumItem key={album.id} itemData={album} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button onClick={() => handleNextClick()} className="arrow arrow-right sprite_02"></button>
      </div>
    </NewAlbumWrapper>
  )
}

export const NewAlbum = memo(FComponent)
export default NewAlbum
