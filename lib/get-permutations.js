
import getOptions from './get-options'

function getPermutations (props, opts) {
  const result = []
  const obj = getOptions(props, opts)
  const keys = Object.keys(obj)
  const max = keys.length - 1

  function combine (a, i) {
    const key = keys[i]
    obj[key].forEach((prop, j) => {
      const b = Object.assign({}, a)
      b[key] = prop

      if (i === max) {
        result.push(b)
      } else {
        combine(b, i + 1)
      }
    })
  }
  combine({}, 0)

  return result
}

export default getPermutations

