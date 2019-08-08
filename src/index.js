function render(element, parent) {
	const { type, props } = element

	const mountedEl = type === 'text' ?
		document.createTextNode(props.textValue)
		: document.createElement(type)

	const propsToIgnore = ['children', 'textValue']
	const propNames = Object.keys(props)
		.filter(name => !propsToIgnore.includes(name))

	propNames.length && propNames.forEach(name => {
		if (name.startsWith('on')) {
      const listenerName = name.substring(2).toLowerCase()
			mountedEl.addEventListener(listenerName, props[name])
		} else {
			mountedEl[name] = props[name]
		}
	})
	
	const children = props.children ? 
		props.children.filter(child => child !== null) : []
	children.forEach(child => render(child, mountedEl))

	parent.appendChild(mountedEl)
}

const transpile = node => {
  const hasChildren = node[2] && Array.isArray(node[2]) && node[2].length

  return {
    type: node[0],
    props: {
      ...node[1],
      children: hasChildren ? node[2].map(child => transpile(child)) : null
    }
  }
}

export {
	render,
	transpile,
}
