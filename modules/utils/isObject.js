export default function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj)
}
