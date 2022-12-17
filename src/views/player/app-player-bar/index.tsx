import React, { ElementRef, memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerBarWrapper, Control, Operator, PlayInfo } from './style'
import { Link, NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { formatImageSize } from '@/utils/format'
import { useAppSelector } from '@/store'
import { getSongUrl } from '../service/player'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { currentSong } = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }))
  const [playing, setPlaying] = useState(false)
  const changePlayStatus = () => {
    console.log('changePlayStatus', playing)
    playing
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => {
          console.log('p-0')
          setPlaying(false)
        })
    setPlaying(!playing)
  }
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleTimeUpdate = () => {
    // console.log('handleTimeUpdate', audioRef.current?.currentTime)
    const currentTime = audioRef.current?.currentTime ?? 0
    const totalTime = duration
    const progress = ((currentTime * 1000) / totalTime) * 100

    setProgress(progress)
    console.log('progress', progress)
  }
  const setSongPlay = async () => {
    console.log('setSongPlay')
  }
  /** 组件内的副作用操作 */
  useEffect(() => {
    getSongUrl(currentSong.id).then(
      (res) => {
        audioRef.current!.src = res.data.data[0].url

        audioRef.current
          ?.play()
          .then(() => {
            console.log('歌曲播放成功！')
          })
          .catch((err) => {
            setPlaying(false)
            console.log('歌曲播放失败', err)
          })
      },
      (err) => {
        console.log('songUrl', err)
      }
    )
    setDuration(currentSong.dt)
  }, [currentSong])

  const handleTimeEnded = () => {
    // if (playMode === 2) {
    //   audioRef.current!.currentTime = 0
    //   audioRef.current?.play()
    // } else {
    //   handleChangeMusic(true)
    // }
  }
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={playing}>
          <button className="cursor-underline prev sprite_playbar"></button>
          <button
            className="cursor-underline play sprite_playbar"
            onClick={() => changePlayStatus()}
          ></button>
          <button className="cursor-underline next sprite_playbar"></button>
        </Control>
        <PlayInfo>
          <Link to="/player">
            <img className="image" src={formatImageSize(currentSong?.al?.picUrl, 34)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                className="ant-slider"
                defaultValue={0}
                value={progress}
                tooltip={{ formatter: null }}
                step={0.2}
              />
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
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
      </div>
    </AppPlayerBarWrapper>
  )
}

export const AppPlayerBar = memo(FComponent)
export default AppPlayerBar
