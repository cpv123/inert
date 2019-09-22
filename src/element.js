function mountElement(element, parent) {
	const { type, props } = element
	let mountedElement

	switch(type) {
		case 'text':
			mountedElement = document.createTextNode(props.textValue)
			break
		default:
			mountedElement = document.createElement(type)
			break
	}

	// Need this for updating virtual elements
	element._dom = mountedElement

	setAttributes(mountedElement, props)

	props.children && props.children.forEach(child => (
		mountElement(child, mountedElement)
	))

	parent.appendChild(mountedElement)
	return mountedElement
}

function renderIntoTree(element, parent) {
	const mountedElement = mountElement(element)
	parent.appendChild(mountedElement)
}

function updateElement(prevElement, nextElement, parent) {
	const dom = prevElement._dom
	nextElement._dom = dom
	const newElement = mountElement(nextElement, parent)
	parent.replaceChild(newElement, dom)
}

function setAttributes(element, props) {
	const propsToIgnore = ['children', 'textValue']
	const propNames = Object.keys(props).filter(name => (
		!propsToIgnore.includes(name)
	))

	propNames.length && propNames.forEach(name => {
		if (name.startsWith('on')) {
      const listenerName = name.substring(2).toLowerCase()
			element.addEventListener(listenerName, props[name])
		} else {
			element[name] = props[name]
		}
	})

	return element
}

export { mountElement, updateElement, renderIntoTree }
