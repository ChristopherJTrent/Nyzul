import { NyzulNode } from './_node.js'
import createElement from './componentFactory.js'
/**
 * The root object for all Nyzul projects
 * Every element you add to your page will hang off of this object.
 */
export default class Nyzul extends NyzulNode {
	/**
     * 
     * @param {String} rootId [default: 'pageContainer'] the html element to use as the root of your project
     */
	constructor(rootId = 'pageContainer') {
		super()
		this.element = document.getElementById(rootId)
	}
	/**
 	* @param {{
	* 	type?: keyof HTMLElementTagNameMap,
	* 	id?: string,
	*   classes?: string[],
	* 	innerText?: string,
	* 	attributes?: {[key]: string},
	*   eventCallbacks?: {
	* 		type: string,
	* 		listener: EventListenerOrEventListenerObject,
	* 		options?: boolean | AddEventListenerOptions
	*   }[],
	*   children?: (Component|HTMLElement)[]
	* }} componentDefinition 
	* @returns {ReturnType<createElement>}
	*/
	static createElement(componentDefinition) {
		return createElement(componentDefinition)
	}
}