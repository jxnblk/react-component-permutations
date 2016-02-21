
import ava from 'ava'
import permutations from '..'

const components = {
  Button: `
    import React from 'react'

    const Button = ({ big, color, outline, title, padding, config, children, ...props }) => {

      const style = {
        display: 'inline-block',
        padding: padding,
        border: 0,
        borderRadius: 2,
        color: 'white',
        backgroundColor: color,
      }

      return (
        <button {...props} style={style}>
          {children}
        </button>
      )
    }

    Root.propTypes = {
      big: React.PropTypes.bool,
      color: React.PropTypes.oneOf([ 'blue', 'green', 'red' ]),
      outline: React.PropTypes.bool,
      title: React.PropTypes.string,
      padding: React.PropTypes.number,
      items: React.PropTypes.array,
      nums: React.PropTypes.arrayOf(React.PropTypes.number),
      config: React.PropTypes.object
    }

    Root.defaultProps = {
      color: 'blue',
      icon: 'check',
      padding: 16
    }

    export default Button
  `,
  Root: `
    import React from 'react'

    class Root extends React.Component {
      render () {
        const { title } = this.props
        return <html>{title}</html>
      }
    }

    Root.propTypes = {
      title: React.PropTypes.string,
      responsive: React.PropTypes.bool,
      fontFamily: React.PropTypes.oneOf(['Georgia', 'Helvetica', 'Verdana'])
    }

    export default Root
  `,
  Input: `
    import React from 'react'

    var sizes = [ 8, 16, 24 ]

    var Input = React.createClass({
      propTypes: {
        size: React.PropTypes.oneOf(sizes)
      },
      render: function () {
        var style = {
          padding: size
        }
        return (
          <input {...this.props} style={style} />
        )
      }
    })
    module.exports = Input
  `
}

ava('is a function', t => {
  t.same(typeof permutations, 'function')
})

ava('returns an array', t => {
  const p = permutations(components.Button)
  t.same(Array.isArray(p), true)
})

ava('returns false if no component is found', t => {
  const p = permutations('Not a component')
  t.same(p, false)
})

ava('returns 12 permutations for Button', t => {
  const p = permutations(components.Button)
  t.same(p.length, 12)
})

ava('returns 6 permutations for Root', t => {
  const p = permutations(components.Root)
  t.same(p.length, 6)
})

ava('allows configurable keys', t => {
  const p = permutations(components.Button, {
    color: ['green', 'blue']
  })
  t.same(p.length, 8)
})

ava('returns correct values for configurable keys', t => {
  const p = permutations(components.Button, {
    color: ['green', 'blue']
  })
  t.same(p[0].color, 'green')
})

ava('should handle computed enum', t => {
  const p = permutations(components.Input)
  t.same(p[0], undefined)
})

ava('allows configurable strings', t => {
  const p = permutations(components.Button, { strings: [ 'Hello', 'Button' ] })
  t.same(p.length, 24)
})

ava('allows configurable numbers', t => {
  const p = permutations(components.Button, { numbers: [ 2, 4, 8 ] })
  t.same(p.length, 36)
})

ava('allows configurable arrays', t => {
  const p = permutations(components.Button, {
    arrays: [
      [1, 2, 3],
      [4, 5, 6]
    ]
  })
  t.same(p.length, 24)
})

ava('allows configurable objects', t => {
  const p = permutations(components.Button, {
    objects: [
      { name: 'Hello' },
      { name: 'Test' }
    ]
  })
  t.same(p.length, 24)
})

