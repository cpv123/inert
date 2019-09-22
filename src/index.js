import { mountElement, renderIntoTree } from './element.js'
import { mountComponent } from './component.js'

function createElement(type, props = {}, children = []) {
  if (typeof type === 'function') {
    return { type, props }
  }

  if (children.length) {
    const cleansedChildren = children.filter(child => child !== null)
    props.children = cleansedChildren
  }

  return {
    type,
    props: { ...props },
  }
}

function mount(input, parent) {
	if (typeof input.type === 'function') {
		return mountComponent(input, parent)
	}

	if (typeof input.type === 'string') {
		const element = mountElement(input)
    return renderIntoTree(element)
	}
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

export { mount, createElement }
