function mountElement(element, parent) {
	const { type, props } = element
	let mountedEl

	switch(type) {
		case 'text':
			mountedEl = document.createTextNode(props.textValue)
			break
		default:
			mountedEl = document.createElement(type)
			break
	}

	const propsToIgnore = ['children', 'textValue']
	const propNames = Object.keys(props).filter(name => (
		!propsToIgnore.includes(name)
	))

	propNames.length && propNames.forEach(name => {
		if (name.startsWith('on')) {
      const listenerName = name.substring(2).toLowerCase()
			mountedEl.addEventListener(listenerName, props[name])
		} else {
			mountedEl[name] = props[name]
		}
	})

	props.children && props.children.forEach(child => (
		mountElement(child, mountedEl)
	))

	parent.appendChild(mountedEl)
	return parent
}

export { mountElement }
