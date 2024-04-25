/**
 * A wrapper around HtmlElement that adds component functionality
 */
export class NyzulNode {
    /**
     *
     * @param {HTMLElement} element
     */
    constructor(element: HTMLElement);
    element: HTMLElement;
    /**
     * appends an HTMLElement to this node
     * @param {HTMLElement} element
     */
    appendChild(element: HTMLElement): void;
    /**
     * appends the render output of a component to the DOM tree of this node
     * @param {Component} component
     */
    appendComponent(component: Component): void;
    /**
     * appends a node to this object
     * @param {NyzulNode} node
     */
    appendNode(node: NyzulNode): void;
    finalize(): HTMLElement;
}
//# sourceMappingURL=_node.d.ts.map