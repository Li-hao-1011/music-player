export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else if (count > 1000000000) {
    return Math.floor(count / 100000000) + '亿'
  } else {
    return count
  }
}

export function formatImageSize(imageUrl: string, width: number, height = width) {
  return `${imageUrl}?param=${width}x${height}`
}

/**
 * 将毫秒变为分钟(xx:xx)
 * @param time 毫秒
 * @returns
 */
export function formatTime(time: number) {
  const timeSeconds = time / 1000
  const minue = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  const formatMinue = String(minue).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinue}:${formatSecond}`
}

export type ILyric = {
  time: number
  text: string
}
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function formatLyric(lyricString: string) {
  const lyrics: ILyric[] = []
  const lyricArr = lyricString.split('\n')
  for (const item of lyricArr) {
    const result = Array.from(timeRegExp.exec(item) || [])
    if (!result.length) continue

    const time1 = parseInt(result[1]) * 60 * 1000
    const time2 = parseInt(result[2]) * 1000
    const time3 = parseInt((result[3] + '').length === 3 ? result[3] : result[3] + '0')
    const timeTotal = time1 + time2 + time3
    // 歌词
    const text = item.replace(timeRegExp, '')
    lyrics.push({
      time: timeTotal,
      text
    })
  }
  return lyrics
}
