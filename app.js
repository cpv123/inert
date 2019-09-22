import { Component } from './src/component.js'
import { createElement } from './src/index.js'

const h = createElement

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      h('div', { id: 1, testProp: 'value' }, [
        h('p', { id: 2 }, [
          h('text', { textValue: 'Click below to update state' })
        ]),
        h('button', { onClick: () => this.setLocalState({ count: this.state.count + 1 }) }, [
          h('text', { textValue: this.state.count })
        ])
      ])
    )
  }
}

// const AppEl = [
//   'div', { id: 1, className: 'test-div' }, [
//     ['span', { className: 'span-1' }, [
//       ['text', { textValue: 'First span!' }]
//     ]],
//     ['span', { className: 'span-2' }, [
//       ['text', { textValue: 'Second span!' }]
//     ]],
//     ['div', {}, [
//       ['p', {}, [
//         ['text', { textValue: 'Lots of text here' }]
//       ]]
//     ]],
//     ['button', { onClick: () => alert('You clicked!') }, [
//       ['text', { textValue: 'Click Me!' }]
//     ]]
//   ]
// ]

export { App }
