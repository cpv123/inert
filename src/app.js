const App = [
  'div', { id: 1, className: 'test-div' }, [
    ['span', { className: 'span-1' }, [
      ['text', { textValue: 'First span!' }]
    ]],
    ['span', { className: 'span-2' }, [
      ['text', { textValue: 'Second span!' }]
    ]],
    ['div', {}, [
      ['p', {}, [
        ['text', { textValue: 'Lots of text here' }]
      ]]
    ]],
    ['button', { onClick: () => alert('You clicked!') }, [
      ['text', { textValue: 'Click Me!' }]
    ]]
  ]
]

export { App }