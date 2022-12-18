import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerBarWrapper, Control, Operator, PlayInfo } from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { formatImageSize, formatTime } from '@/utils/format'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  changeMusicAction,
  changePlayMode,
  fetchCurrentSongAction,
  ISwitchMode,
  setLyricIndex
} from '../store/player'
import { Applyric } from '@/views/player/app-lyric'

interface IProps {
  children?: ReactNode
}
const FComponent: FC<IProps> = () => {
  const { currentSong, songUrl, lyrics, lyricIndex, playMode } = useAppSelector((state) => ({
    currentSong: state.player.currentSong,
    songUrl: state.player.songUrl,
    lyrics: state.player.lyrics,
    lyricIndex: state.player.lyricIndex,
    playMode: state.player.playMode
  }))
  const [playing, setPlaying] = useState(false)
  const [lyric, setLyric] = useState('')

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setSliding] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()
  // 暂停/播放
  const changePlayStatus = function () {
    if (playing) {
      audioRef.current?.pause()
    } else {
      audioRef.current
        ?.play()
        .then(() => {
          console.warn('播放成功')
        })
        .catch((err) => {
          console.error(err)
          setPlaying(false)
        })
    }
    setPlaying(!playing)
  }
  // 切换歌曲
  const handleonChangeSong = (type: ISwitchMode) => {
    dispatch(changeMusicAction(type))
  }
  const handleTimeUpdate = () => {
    // 当前拖拽的时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 不拖拽是才设置进度条
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setCurrentTime(currentTime)
      setProgress(progress)
    }
    // 匹配歌词
    let index = lyrics.length === 0 ? 0 : lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i === 0 ? 0 : i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    setLyric(lyrics?.[index]?.text ?? '')
    dispatch(setLyricIndex(index))
  }

  /** 组件内的副作用操作 */
  useEffect(() => {
    new Promise((resolve, _reject) => {
      resolve(1)
    }).then(() => {
      audioRef.current!.src = songUrl
      audioRef.current
        ?.play()
        .then(() => {
          console.warn('歌曲播放成功！')
        })
        .catch((err) => {
          setPlaying(false)
          console.error('歌曲播放失败', err)
        })
      setDuration(currentSong.dt)
    })
  }, [currentSong, songUrl])

  const handleTimeEnded = () => {
    // if (playMode === 2) {
    //   audioRef.current!.currentTime = 0
    //   audioRef.current?.play()
    // } else {
    //   handleChangeMusic(true)
    // }
  }
  // 改变进度条
  const handleOnAfterChange = (value: number) => {
    const time = (value / 100) * duration
    audioRef.current!.currentTime = time / 1000
    setCurrentTime(time)
    setSliding(false)
  }
  // 拖拽进度条
  const handleOnChange = (value: number) => {
    // 设置拖拽标志
    setSliding(true)
    setProgress(value)
    // 拖拽过程中设置实时时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }
  // 播放模式
  const handleChangePlayMode = () => {
    let newPlayMode = playMode + 1
    newPlayMode = newPlayMode > 2 ? 0 : newPlayMode
    dispatch(changePlayMode(newPlayMode))
  }
  const setLyrics = (context: string) => context
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={playing}>
          <button
            className="cursor-underline prev sprite_playbar"
            onClick={() => handleonChangeSong('prev')}
          ></button>
          <button
            className="cursor-underline play sprite_playbar"
            onClick={changePlayStatus}
          ></button>
          <button
            className="cursor-underline next sprite_playbar"
            onClick={() => handleonChangeSong('next')}
          ></button>
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
                onAfterChange={(value) => handleOnAfterChange(value)}
                onChange={(value) => handleOnChange(value)}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator playMode={playMode}>
          <div className="left">
            <button className="btn cursor-underline pip_icon pip"></button>
            <button className="btn cursor-underline sprite_playbar favor"></button>
            <button className="btn cursor-underline sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn cursor-underline sprite_playbar volume"></button>
            <button
              className="btn cursor-underline sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn cursor-underline sprite_playbar playlist"></button>
          </div>
        </Operator>
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
      </div>

      {/* 歌词 */}
      <Applyric isShow={true} text={setLyrics(lyric)} />
    </AppPlayerBarWrapper>
  )
}

export const AppPlayerBar = memo(FComponent)
export default AppPlayerBar
