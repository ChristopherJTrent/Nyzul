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
 * }[]
 * }} componentDefinition
 */
export default function createElement(componentDefinition: {
    type?: keyof HTMLElementTagNameMap;
    id?: string;
    classes?: string[];
    innerText?: string;
    attributes?: {
        [key]: string;
    };
    eventCallbacks?: {
        type: string;
        listener: EventListenerOrEventListenerObject;
        options?: boolean | AddEventListenerOptions;
    }[];
}): HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | HTMLHeadElement | HTMLAreaElement | HTMLObjectElement | HTMLMapElement | HTMLInputElement | HTMLBaseElement | HTMLTimeElement | HTMLDataElement | HTMLProgressElement | HTMLTrackElement | HTMLSourceElement | HTMLButtonElement | HTMLLinkElement | HTMLAudioElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLFieldSetElement | HTMLHeadingElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLSelectElement | HTMLSlotElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTitleElement | HTMLTableRowElement | HTMLUListElement;
//# sourceMappingURL=componentFactory.d.ts.map