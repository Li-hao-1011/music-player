import React, { memo, useRef, ElementRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classnames from 'classnames'
import { useAppSelector, appShallowEqual } from '@/store'
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './TopBanner.style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { banners = [] } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const handerPrevClick = () => {
    carouselRef.current?.prev()
  }
  const handerNextClick = () => {
    carouselRef.current?.next()
  }
  const [currentIndex, setCurrentIndex] = useState(0)
  let bgImageURL = banners[currentIndex]?.imageUrl
  if (bgImageURL) {
    bgImageURL = bgImageURL + '?imageView&blur=40x20'
  }
  const handleBeforeChange = (_from: number, to: number) => {
    setCurrentIndex(to)
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageURL}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={carouselRef}
            autoplay
            effect="fade"
            beforeChange={handleBeforeChange}
            dots={false}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span className={classnames('item', { active: currentIndex === index })}></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={() => handerPrevClick()}></button>
          <button className="btn right" onClick={() => handerNextClick()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export const TopBanner = memo(FComponent)
export default TopBanner
