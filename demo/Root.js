
import React from 'react'
import data from './data'
import Button from './Button'

const css = `
.blue { color: #07b }
.b4 { border-width: 4px }
`.replace(/\n/g, '')

class Root extends React.Component {

  render () {
    const { ButtonSrc, permutations, permutationsColors } = data

    return (
      <div className='p3'>
        <meta charSet='utf-8' />
        <link href='https://unpkg.com/basscss-basic/index.css' rel='stylesheet' />
        <link href='https://unpkg.com/basscss@8.0.0/css/basscss.min.css' rel='stylesheet' />
        <style dangerouslySetInnerHTML={{ __html: css }} />

        <header>
          <h1>react-component-permutations demo</h1>
          <p>Reads a component’s <code>propTypes</code> to return an array of permutations that can be used to show component variations.</p>
        </header>
        <hr />
        <p>Given a Button component with <code>propTypes</code> defined, the module returns {permutations.length} permutations for showing variations.</p>
        <div className='sm-flex mxn2'>
          <div className='sm-col-6 px2'>
            <h3>Button.js</h3>
            <pre children={ButtonSrc}
              className='py0 pl2 border-left b4 blue' />
          </div>
          <div className='sm-col-6 px2'>
            <h3>Default Permutations</h3>
            <pre children={'permutations(buttonSourceString)'}
              className='py0 pl2 border-left b4 blue' />
            <div className='flex flex-wrap items-center'>
              {permutations.map((p, i) => (
                <div key={i} className='m1 flex-auto'
                  style={{ flexBasis: 128 }}>
                  <Button children='Hello' {...p} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <h3>With Options</h3>
        <p>By configuring options for the <code>colors</code> prop, there are now {permutationsColors.length} permutations.</p>
        <pre children={'permutations(buttonSourceString, { colors: colorKeys })'}
          className='py0 pl2 border-left b4 blue' />
        <div className='flex flex-wrap items-center'>
          {permutationsColors.map((p, i) => (
            <div key={i} className='m1 flex-auto'
              style={{ flexBasis: 128 }}>
              <Button children='Hello' {...p} />
            </div>
          ))}
        </div>
        <hr />
        <footer className='py3'>
          <a href='//github.com/jxnblk/react-component-permutations' className='mr2'>GitHub</a>
          <a href='//npmjs.com/package/react-component-permutations'>npm</a>
        </footer>
      </div>
    )
  }

}

export default Root

