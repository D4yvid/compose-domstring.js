export type Attribute = { key: string, value: any, code?: boolean };

export type Element = {
    tagName: string;
    attributes: Attribute[],
    children: Element[],
    needCloseTag: boolean
};

export type RawHTMLElement = Element & {
    tagName: '#raw-html',
    attributes: [],
    children: [string],
    needCloseTag: false
};

export type TextElement = Element & {
    tagName: '#text',
    attributes: [],
    children: [string],
    needCloseTag: false
};

export type GenericProps = { [key: string]: any };

export type EventHandlerAttributes = {
    onabort: (event: any) => any;
	onautocomplete: (event: any) => any;
	onautocompleteerror: (event: any) => any;
	onblur: (event: any) => any;
	oncancel: (event: any) => any;
	oncanplay: (event: any) => any;
	oncanplaythrough: (event: any) => any;
	onchange: (event: any) => any;
	onclick: (event: any) => any;
	onclose: (event: any) => any;
	oncontextmenu: (event: any) => any;
	oncuechange: (event: any) => any;
	ondblclick: (event: any) => any;
	ondrag: (event: any) => any;
	ondragend: (event: any) => any;
	ondragenter: (event: any) => any;
	ondragleave: (event: any) => any;
	ondragover: (event: any) => any;
	ondragstart: (event: any) => any;
	ondrop: (event: any) => any;
	ondurationchange: (event: any) => any;
	onemptied: (event: any) => any;
	onended: (event: any) => any;
	onerror: (event: any) => any;
	onfocus: (event: any) => any;
	oninput: (event: any) => any;
	oninvalid: (event: any) => any;
	onkeydown: (event: any) => any;
	onkeypress: (event: any) => any;
	onkeyup: (event: any) => any;
	onload: (event: any) => any;
	onloadeddata: (event: any) => any;
	onloadedmetadata: (event: any) => any;
	onloadstart: (event: any) => any;
	onmousedown: (event: any) => any;
	onmouseenter: (event: any) => any;
	onmouseleave: (event: any) => any;
	onmousemove: (event: any) => any;
	onmouseout: (event: any) => any;
	onmouseover: (event: any) => any;
	onmouseup: (event: any) => any;
	onmousewheel: (event: any) => any;
	onpause: (event: any) => any;
	onplay: (event: any) => any;
	onplaying: (event: any) => any;
	onprogress: (event: any) => any;
	onratechange: (event: any) => any;
	onreset: (event: any) => any;
	onresize: (event: any) => any;
	onscroll: (event: any) => any;
	onseeked: (event: any) => any;
	onseeking: (event: any) => any;
	onselect: (event: any) => any;
	onshow: (event: any) => any;
	onsort: (event: any) => any;
	onstalled: (event: any) => any;
	onsubmit: (event: any) => any;
	onsuspend: (event: any) => any;
	ontimeupdate: (event: any) => any;
	ontoggle: (event: any) => any;
	onvolumechange: (event: any) => any;
	onwaiting: (event: any) => any;
};

const EVENT_HANDLER_ATTRIBUTES: (keyof EventHandlerAttributes)[] = ["onabort", "onautocomplete", "onautocompleteerror", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onsort", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"];

function isEventHandlerAttribute(attribute: string): boolean {
    return EVENT_HANDLER_ATTRIBUTES.includes(attribute as keyof EventHandlerAttributes);
}

export function setupAttributes(
    element: Element,
    properties: GenericProps = {},
): void {
    Object.entries(properties).forEach(([key, value]) => {
        if (value === undefined || value === null) {
            return;
        }

        if (key.startsWith("aria") || key.startsWith("data")) {
            element.attributes.push(
                { key: key.replace(/([A-Z])/, "-$1").toLowerCase(), value: value }
            )

            return;
        }

        if (isEventHandlerAttribute(key) && typeof(value) === 'function') {
            element.attributes.push(
                { key, value: value.toString(), code: true }
            );

            return;
        }

        element.attributes.push(
            { key: key.toLowerCase(), value: value }
        )
    });
}
