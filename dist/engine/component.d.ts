/**
 * Extend this class to create your own components.
 * You *must* override `render` with your own html generation code.
 */
export default class Component extends NyzulNode {
    constructor(element: any);
    /**
     * @returns {HTMLElement} the html rendered for this component.
     */
    render(): HTMLElement;
}
import { NyzulNode } from "./_node.js";
//# sourceMappingURL=component.d.ts.map