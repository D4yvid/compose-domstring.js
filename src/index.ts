import { ComposableInstance } from "compose.js";
import { Element, RawHTMLElement, TextElement } from "./props.js";
import { Text } from "./elements.js";

/** @throws {Error} */
export function renderToString<T>(
  instance: ComposableInstance<T>
): string {
  if (!instance) {
    throw new Error("There is no instance to render into the element");
  }

  function doRender<T>(instance: ComposableInstance<T>) {
    instance.resetRememberedStateRefCounter();

    let children = [];

    if (instance.rawChildren) {
      for (let [index, child] of instance.rawChildren.entries()) {
        if (typeof (child) === 'undefined')
          continue;

        if (typeof(child) === 'string') {
          child = Text(child);
        }

        const result = doRender(child);

        children.push(result);
      }
    }

    instance.setChildren(children);

    let result = instance.information.render(instance);

    while (result instanceof ComposableInstance) {
      result = doRender(result);
    }

    return result;
  }

  function escapeHTML(str: string) {
    return str.replace(/[&<>"']/g, match => {
      const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };

      return entities[match as keyof typeof entities];
    });
  }

  function elementToString(element: Element): string {
    let result = ``;

    if (element.tagName == 'html') {
      result += '<!DOCTYPE html>';
    }

    if (element.tagName == '#text') {
      return escapeHTML((element as TextElement).children[0]);
    }

    if (element.tagName == '#raw-html') {
      return (element as RawHTMLElement).children[0];
    }

    result += `<${element.tagName}`;

    for (let attribute of element.attributes) {
      result += ` ${attribute.key}`;

      if (attribute.value && attribute.value !== true) {
        result += `="${attribute.value}"`
      }
    }

    result = result.trim() + `>`;

    for (let child of element.children) {
      result += elementToString(child);
    }

    if (element.needCloseTag)
      result += `</${element.tagName}>`;

    return result;
  }

  return elementToString(doRender(instance));
}
