import { mountElement } from './element.js'

class Component {
  constructor(props) {
    this.props = props
    this.state = this.state || {}
    this._pendingState = null
	}

  updateComponent() {
    if (this.state !== this._pendingState) {
      this.state = this._pendingState
    }
    this._pendingState = null
    const nextRenderedElement = this.render();
    console.log('Next el to render is', nextRenderedElement)
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

function mountComponent(component, parent) {
  const { type: Component, props } = component
	const instance = new Component(props)
	const currentElement = instance.render()
	const dom = mountElement(currentElement, parent)

	return dom
}

export { Component, mountComponent }
