// 驼峰转自字符串 camelCase to keyCase
const camToStr = (name: string, symbol = '-') => {
  const arr = name.split('')
  for (let i = 0; i < arr.length; i++) {
    if (/[A-Z]/.test(arr[i])) {
      arr[i] = `${i === 0 ? '' : symbol}` + arr[i].toLowerCase()
    }
  }
  return arr.join('')
}
export default camToStr