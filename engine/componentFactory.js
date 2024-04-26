import Component from "./component.js"

/**
 * 
 * @param {{
 * 	type?: keyof HTMLElementTagNameMap,
 * 	id?: string,
 *  classes?: string[],
 * 	innerText?: string,
 * 	attributes?: {[key]: string},
 *  eventCallbacks?: {
 * 		type: string,
 * 		listener: EventListenerOrEventListenerObject,
 * 		options?: boolean | AddEventListenerOptions
 * }[],
 * children?: (Component|HTMLElement)[]
 * }} componentDefinition 
 */
export default function createElement(componentDefinition) {
	const element = document.createElement(componentDefinition.type ?? 'div')
	if (componentDefinition.id) element.id = componentDefinition.id
	if (componentDefinition.classes) 
		element.classList.add(componentDefinition.classes)
	if (componentDefinition.innerText) 
		element.innerText = componentDefinition.innerText
	if (componentDefinition.attributes) {
		for (const [k, v] of Object.entries(componentDefinition.attributes)) {
			element.setAttribute(k, v)
		}
	}
	if (componentDefinition.eventCallbacks) {
		for(const def of componentDefinition.eventCallbacks) {
			element.addEventListener(def.type, def.listener, def.options)
		}
	}
	componentDefinition.children.forEach((node) => {
		if (node instanceof Component) {
			element.appendChild(node.render())
		} else {
			element.appendChild(node)
		}
	})
	return element
}