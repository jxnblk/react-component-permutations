
import { parse } from 'react-docgen'
import getPermutations from './lib/get-permutations'

export default function (src, opts) {
  opts = opts || {}

  try {
    const info = parse(src)
    const result = getPermutations(info.props, opts)
    return result
  } catch (e) {
    console.log('Could not read component')
    return false
  }
}

