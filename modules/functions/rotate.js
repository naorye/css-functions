import isObject from '../utils/isObject'
import applyUnitToNumbers from '../utils/applyUnitToNumbers'

export default function rotate(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'rotate(' + applyUnitToNumbers(values, 'deg').join(',') + ')'
}
