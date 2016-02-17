
# react-component-permutations

Creates an array of React component props to display all possible permutations

Uses react-docgen to return component information along with an array of props permutations to display various options for components.


## Options

- `strings`
- `numbers`
- `arrays`
- `objects`
- `nodes`

---

## PropTypes

### Automatic
- `bool` - true or false
- `oneOf` - not computed - n

- `oneOfType` - parse 1 level

### Configurable
- `string` - optional test strings array
- `number` - optional test number array
- `array` - optional
- `object`
- `arrayOf` - same config as array
- `objectOf` - same config as object

- `node`
- `element` - same as nodes

### Ignored (potentially configurable)
- `func` - ignored
- `instanceOf`
- `shape`

