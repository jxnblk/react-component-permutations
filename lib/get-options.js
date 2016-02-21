
function getOptions (props, opts) {
  opts = opts || {}
  const result = {}

  Object.keys(props).forEach(key => {
    const variations = []
    const t = props[key].type
    if (!t) {
      return false
    } else if (opts[key] && Array.isArray(opts[key])) {
      opts[key].forEach(v => {
        return variations.push(v)
      })
    } else if (t.name === 'bool') {
      variations.push(true)
      variations.push(false)
    } else if (t.name === 'enum') {
      if (!t.computed && Array.isArray(t.value)) {
        t.value.forEach(val => {
          variations.push(val.value.replace(/^\'|\'$/g, ''))
        })
      } else {
        return false
      }
    } else if (t.name === 'string' && opts.strings && Array.isArray(opts.strings)) {
      opts.strings.forEach(str => variations.push(str))
    } else if (t.name === 'number' && opts.numbers && Array.isArray(opts.numbers)) {
      opts.numbers.forEach(n => variations.push(n))
    } else if (t.name === 'array') {
      if (opts.arrays && Array.isArray(opts.arrays)) {
        opts.arrays.forEach(a => {
          variations.push(a)
        })
      }
    } else if (t.name === 'object' && opts.objects && Array.isArray(opts.objects)) {
      opts.objects.forEach(o => variations.push(o))
    } else {
      // console.log('type not handled', t.name, t)
    }
    if (variations.length) {
      result[key] = variations
    }
  })

  return result
}

export default getOptions

