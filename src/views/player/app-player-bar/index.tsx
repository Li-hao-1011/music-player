import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerBarWrapper, Control, Operator, PlayInfo } from './style'
import { Link, NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { formatImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={true}>
          <button className="cursor-underline prev sprite_playbar"></button>
          <button className="cursor-underline play sprite_playbar"></button>
          <button className="cursor-underline next sprite_playbar"></button>
        </Control>
        <PlayInfo>
          <Link to="/player">
            <img
              className="image"
              src={formatImageSize(
                'http://p2.music.126.net/thrEGQSfLQp0Kd6M5yBEEg==/109951167878713410.jpg',
                34
              )}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">日落大道</span>
              <span className="singer-name">梁博</span>
            </div>
            <div className="progress">
              <Slider className="ant-slider" defaultValue={30} />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">03:42</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="btn cursor-underline pip_icon pip"></button>
            <button className="btn cursor-underline sprite_playbar favor"></button>
            <button className="btn cursor-underline sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn cursor-underline sprite_playbar volume"></button>
            <button className="btn cursor-underline sprite_playbar loop"></button>
            <button className="btn cursor-underline sprite_playbar playlist"></button>
          </div>
        </Operator>
      </div>
      <audio />
    </AppPlayerBarWrapper>
  )
}

export const AppPlayerBar = memo(FComponent)
export default AppPlayerBar
