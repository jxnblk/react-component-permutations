import React from 'react'
import colors from 'colors.css'

const colorKeys = Object.keys(colors)

const Button = ({ big, color, pill, outline, ...props }) => (
  <button
    style={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      display: 'inline-block',
      padding: big ? 16 : 12,
      border: 0,
      borderRadius: pill ? 9999 : 2,
      color: outline ? colors[color] : 'white',
      backgroundColor: outline ? 'transparent' : colors[color],
      boxShadow: outline ? 'inset 0 0 0 2px' : null
    }}
    {...props} />
)

Button.propTypes = {
  big: React.PropTypes.bool,
  color: React.PropTypes.oneOf(colorKeys),
  pill: React.PropTypes.bool,
  outline: React.PropTypes.bool
}

Button.defaultProps = {
  color: 'blue'
}

export default Button
