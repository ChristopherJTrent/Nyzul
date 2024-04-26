import { NyzulNode } from './_node.js'
/**
 * Extend this class to create your own components.
 * You *must* override `render` with your own html generation code.
 */
export default class Component extends NyzulNode{
	constructor(element) {
		element ??= document.createElement('div')
		super(element)
	}
	/**
	 * This method should set up the content of a component and prepare it for mounting
     * @returns {undefined} 
     */
	render() {}
	/**
	 * The majority of components will not override this method. returns the final component  
	 * DO NOT CALL THIS DURING YOUR RENDER.
	 * @returns {HTMLElement}
	 */
	finalize() {
		this.render()
		this.afterRender()
		return this.element
	}
	/**
	 * @returns {undefined}
	 */
	afterRender() {}
}