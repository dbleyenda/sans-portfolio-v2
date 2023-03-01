export const convertObjToArray = (obj) => {
  return [...Object.keys(obj).map(key => obj[key])]
}