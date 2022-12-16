import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerBarWrapper, Control, Operator, PlayInfo } from './style'
import { Link, NavLink } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={false}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <Link to="/player">
            <img
              className="image"
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">你好</span>
              <span className="singer-name">李昊</span>
            </div>
            <div className="progress">
              {/* Slider组件 */}
              <Slider step={0.5} />
              <div className="time">
                <span className="current">00:53</span>
                <span className="divider">/</span>
                <span className="duration">04:54</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </Operator>
      </div>
      <audio />
    </AppPlayerBarWrapper>
  )
}

export const AppPlayerBar = memo(FComponent)
export default AppPlayerBar
