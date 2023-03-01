export const loadImageToCache = (src) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(src), 1000)
    const img = new Image()
    img.src = src
    window[src] = img
    img.onload = () => resolve(src)
    img.onerror = () => reject(src)
  }).catch((src) => {
    console.log(`Unable to load: ${src}`)
  })
}