
import React from 'react'
import data from './data'
import Button from './Button'

class Root extends React.Component {

  render () {
    return (
      <div className='p3'>
        <link href='https://npmcdn.com/basscss-basic/index.css' rel='stylesheet' />
        <link href='https://npmcdn.com/basscss@8.0.0/css/basscss.min.css' rel='stylesheet' />
        <h1>react-component-permutations demo</h1>
        <hr />
        <div className='flex flex-wrap items-center'>
          {data.permutations.map((p, i) => (
            <div key={i} className='m1 flex-auto'
              style={{ flexBasis: 128 }}>
              <Button {...p} children='Hello' />
            </div>
          ))}
        </div>
        <pre>{JSON.stringify(data.permutations, null, 2)}</pre>
      </div>
    )
  }

}

export default Root

