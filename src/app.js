import { Component } from './component.js'
import { createElement } from './index.js'

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      createElement('div', { id: 1, testProp: 'value' }, [
        createElement('p', { id: 2 }, [
          createElement('text', { textValue: 'Paragraph' })
        ]),
        createElement('button', { onClick: () => this.setLocalState({ count: 1 }) }, [
          createElement('text', { textValue: this.state.count })
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
