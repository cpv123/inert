import { mountElement, updateElement } from './element.js'
import { mount } from './index.js'

class Component {
  constructor(props) {
    this.props = props
    this.state = this.state || {}
    this._pendingState = null
	}

  updateComponent() {
    const prevElement = this._currentElement

    if (this.state !== this._pendingState) {
      this.state = this._pendingState
    }

    this._pendingState = null
    const nextElement = this.render()
    this._currentElement = nextElement

    // mount(nextElement, this._parentNode)
    update(prevElement, nextElement, this._parentNode)
  }

  setLocalState(newLocalState) {
    this._pendingState = {
      ...this.state,
      ...newLocalState,
    }

    this.updateComponent()
  }

  render() {}
}

function update(prevElement, nextElement, parent) {
  const dom = prevElement._dom
  nextElement._dom = dom
  updateElement(prevElement, nextElement, parent)
}

function mountComponent(component, parent) {
  const { type: Component, props } = component
	const instance = new Component(props)
	const currentElement = instance.render()

  instance._parentNode = parent
  instance._currentElement = currentElement

	const dom = mountElement(currentElement, parent)
  component._dom = dom

	return dom
}

export { Component, mountComponent }
