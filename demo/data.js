
import fs from 'fs'
import path from 'path'
import colors from 'colors.css'
import permutations from '..'

const ButtonSrc = fs.readFileSync('Button.js', 'utf8')

const data = {
  permutations: permutations(ButtonSrc, {
    color: Object.keys(colors)
  })
}

export default data

