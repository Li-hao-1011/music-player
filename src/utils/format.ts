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