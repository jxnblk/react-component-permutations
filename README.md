
# react-component-permutations
# WIP

Uses propTypes to create an array of React component props to display various permutations.

[![Build Status](https://travis-ci.org/jxnblk/react-component-permutations.svg)](https://travis-ci.org/jxnblk/react-component-permutations)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

```sh
npm i react-component-permutations
```

## Usage

```js
import fs from 'fs'
import getPermutations from 'react-component-permutations'

const src = fs.readFileSync('./components/Button.js', 'utf8')
const options = {}
const permutations = getPermutations(src, options)
```

## Options

- `strings` - Array - strings to render for `PropType.string`
- `numbers` - Array - numbers to render for `PropType.number`
- `arrays` - Array - arrays to render for `PropType.array`
- `objects` - Array - objects to render for `PropType.object`
- `nodes` - Array - nodes to render for `PropTypes.node`
- `[key]` - Array - any prop name to add to the returned objects array

## Demo

![Demo Screenshot](/demo/demo-screenshot.png)

See the [`/demo`](demo) folder.

MIT License

