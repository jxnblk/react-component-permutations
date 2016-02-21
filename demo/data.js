
import fs from 'fs'
import path from 'path'
import colors from 'colors.css'
import permutations from '..'

const ButtonSrc = fs.readFileSync('Button.js', 'utf8')

const colorKeys = Object.keys(colors)
  .filter(key => key !== 'white')

const data = {
  ButtonSrc,
  permutations: permutations(ButtonSrc),
  permutationsColors: permutations(ButtonSrc, {
    color: colorKeys,
    children: [ 'Hello', 'Howdy' ]
  })
}

export default data

