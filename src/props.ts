export type Attribute = { key: string, value: any };

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

export type GenericProps =
  | Partial<{
      accesskey: string;
      autocapitalize: string;
      class: string;
      contenteditable: boolean | string;
      dir: string;
      draggable: boolean | string;
      enterkeyhint: string;
      hidden: boolean;
      id: string;
      inert: boolean;
      inputmode: string;
      is: string;
      lang: string;
      nonce: string;
      part: string;
      role: string;
      slot: string;
      spellcheck: boolean | string;
      style: string;
      tabindex: number;
      title: string;
      translate: string;
      ariaActiveDescendant: string;
      ariaAtomic: boolean | string;
      ariaAutoComplete: string;
      ariaBusy: boolean;
      ariaChecked: boolean | string;
      ariaColcount: number;
      ariaColindex: number;
      ariaColspan: number;
      ariaControls: string;
      ariaCurrent: string | boolean;
      ariaDescribedBy: string;
      ariaDetails: string;
      ariaDisabled: boolean;
      ariaDropEffect: string;
      ariaErrorMessage: string;
      ariaExpanded: boolean;
      ariaFlowTo: string;
      ariaGrabbed: boolean;
      ariaHasPopup: boolean | string;
      ariaHidden: boolean;
      ariaInvalid: boolean | string;
      ariaKeyShortcuts: string;
      ariaLabel: string;
      ariaLabelledBy: string;
      ariaLevel: number;
      ariaLive: string;
      ariaModal: boolean;
      ariaMultiline: boolean;
      ariaMultiSelectable: boolean;
      ariaOrientation: string;
      ariaOwns: string;
      ariaPlaceholder: string;
      ariaPosInset: number;
      ariaPressed: boolean | string;
      ariaReadonly: boolean;
      ariaRelevant: string;
      ariaRequired: boolean;
      ariaRoleDescription: string;
      ariaRowCount: number;
      ariaRowIndex: number;
      ariaRowSpan: number;
      ariaSelected: boolean;
      ariaSetSize: number;
      ariaSort: string;
      ariaValueMax: number;
      ariaValueMin: number;
      ariaValueNow: number;
      ariaValueText: string;

      popover: boolean|string;
      popoverTarget: string;
      popoverTargetAction: string;
    }>
  | object;

export type HTMLProps = GenericProps &
  Partial<{
    version: string;
    xmlns: string;
  }>;

export type AnchorProps = GenericProps &
  Partial<{
    attributionsrc: string;
    download: boolean | string;
    href: string;
    hrefLang: string;
    ping: string;
    referrerPolicy:
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";
    rel: string;
    target: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
    type: string;

    /** @deprecated */
    charSet: string;

    /** @deprecated */
    coords: string;

    /** @deprecated */
    name: string;

    /** @deprecated */
    rev: string;

    /** @deprecated */
    shape: string;
  }>;

export type AbbrProps = GenericProps &
  Partial<{
    title: string;
  }>;

export type AreaProps = GenericProps &
  Partial<{
    alt: string;
    coords: string;
    shape: string;
    target: string;
    href: string;
    ping: string;
    referrerPolicy: string;
    download: boolean;
    hrefLang: string;
    type: string;
  }>;

export type AudioProps = GenericProps &
  Partial<{
    src: string;
    controls: boolean;
    autoPlay: boolean;
    loop: boolean;
    muted: boolean;
    preload: string;
  }>;

export type BaseProps = GenericProps &
  Partial<{
    href: string;
    target: string;
  }>;

export type BdiProps = GenericProps &
  Partial<{
    dir: string;
  }>;

export type BdoProps = GenericProps &
  Partial<{
    dir: string;
  }>;

export type BlockquoteProps = GenericProps &
  Partial<{
    cite: string;
  }>;

export type ButtonProps = GenericProps &
  Partial<{
    autoFocus: boolean;
    disabled: boolean;
    form: string;
    formAction: string;
    formEnctype:
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain";
    formMethod: "get" | "post" | "dialog";
    formNoValidate: boolean;
    formTarget: "_self" | "_blank" | "_parent" | "_top";
    name: string;
    type: "button" | "submit" | "reset";
    value: string;
    popoverTarget: string;
  }>;

export type CanvasProps = GenericProps &
  Partial<{
    height: number;
    width: number;
  }>;

export type ColProps = GenericProps &
  Partial<{
    span: number;
    width: string;
  }>;

export type ColgroupProps = GenericProps &
  Partial<{
    span: number;
  }>;

export type DataProps = GenericProps &
  Partial<{
    value: string;
  }>;

export type DelProps = GenericProps &
  Partial<{
    cite: string;
    datetime: string;
  }>;

export type DetailsProps = GenericProps &
  Partial<{
    open: boolean;
  }>;

export type DialogProps = GenericProps &
  Partial<{
    open: boolean;
  }>;

export type EmbedProps = GenericProps &
  Partial<{
    src: string;
    type: string;
    width: number;
    height: number;
  }>;

export type FieldSetProps = GenericProps &
  Partial<{
    disabled: boolean;
    form: string;
    name: string;
  }>;

export type FormProps = GenericProps &
  Partial<{
    action: string;
    method: string;
    enctype: string;
    target: string;
    name: string;
    novalidate: boolean;
  }>;

export type IframeProps = GenericProps &
  Partial<{
    src: string;
    srcdoc: string;
    name: string;
    sandbox: string;
    width: number;
    height: number;
    allow: string;
    allowfullscreen: boolean;
  }>;

export type ImageProps = GenericProps &
  Partial<{
    alt: string;
    crossOrigin: "anonymous" | "use-credentials";
    decoding: "sync" | "async" | "auto";
    height: number | string;
    isMap: boolean;
    loading: "eager" | "lazy";
    referrerPolicy:
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";
    sizes: string;
    src: string;
    srcSet: string;
    useMap: string;
    width: number | string;
  }>;

export type InputProps = GenericProps &
  Partial<{
    accept: string;
    alt: string;
    autoComplete: string;
    autoFocus: boolean;
    capture: string | boolean;
    checked: boolean;
    dirName: string;
    disabled: boolean;
    form: string;
    formAction: string;
    formEnctype:
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain";
    formMethod: "get" | "post" | "dialog";
    formNoValidate: boolean;
    formTarget: "_self" | "_blank" | "_parent" | "_top";
    height: number;
    list: string;
    max: string | number;
    maxLength: number;
    min: string | number;
    minLength: number;
    multiple: boolean;
    name: string;
    pattern: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    size: number;
    src: string;
    step: string | number;
    type:
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "password"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "submit"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week";
    value: string | number | readonly string[];
    width: number;
  }>;

export type InsProps = GenericProps &
  Partial<{
    cite: string;
    datetime: string;
  }>;

export type LabelProps = GenericProps &
  Partial<{
    for: string;
  }>;

export type LiProps = GenericProps &
  Partial<{
    value: number;
  }>;

export type LinkProps = GenericProps &
  Partial<{
    href: string;
    rel: string;
    type: string;
    sizes: string;
    crossorigin: boolean;
    as: string;
  }>;

export type MapProps = GenericProps &
  Partial<{
    name: string;
  }>;

export type MetaProps = GenericProps &
  Partial<{
    charset: string;
    name: string;
    content: string;
    httpEquiv: string;
    viewport: string;
  }>;

export type MeterProps = GenericProps &
  Partial<{
    value: number;
    min: number;
    max: number;
    low: number;
    high: number;
    optimum: number;
  }>;

export type ObjectProps = GenericProps &
  Partial<{
    data: string;
    type: string;
    width: number;
    height: number;
    name: string;
  }>;

export type OlProps = GenericProps &
  Partial<{
    start: number;
    reversed: boolean;
    type: string;
  }>;

export type OptgroupProps = GenericProps &
  Partial<{
    disabled: boolean;
    label: string;
  }>;

export type OptionProps = GenericProps &
  Partial<{
    disabled: boolean;
    label: string;
    selected: boolean;
    value: string;
  }>;

export type OutputProps = GenericProps &
  Partial<{
    for: string;
    form: string;
    name: string;
  }>;

export type ParamProps = GenericProps &
  Partial<{
    name: string;
    value: string;
  }>;

export type ProgressProps = GenericProps &
  Partial<{
    value: number;
    max: number;
  }>;

export type QProps = GenericProps &
  Partial<{
    cite: string;
  }>;

export type ScriptProps = GenericProps &
  Partial<{
    async: boolean;
    crossorigin: string;
    defer: boolean;
    src: string;
    type: string;
  }>;

export type SelectProps = GenericProps &
  Partial<{
    multiple: boolean;
    name: string;
    size: number;
  }>;

export type SourceProps = GenericProps &
  Partial<{
    src: string;
    type: string;
    media: string;
    sizes: string;
  }>;

export type StyleProps = GenericProps &
  Partial<{
    media: string;
    scoped: boolean;
    type: string;
  }>;

export type SvgProps = GenericProps &
  Partial<{
    xmlns: string;
    width: number;
    height: number;
    viewBox: string;
  }>;

export type TdProps = GenericProps &
  Partial<{
    colspan: number;
    rowspan: number;
    headers: string;
    abbr: string;
    scope: string;
  }>;

export type TextAreaProps = GenericProps &
  Partial<{
    autoFocus: boolean;
    cols: number;
    dirName: string;
    disabled: boolean;
    form: string;
    maxLength: number;
    minLength: number;
    name: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    rows: number;
    wrap: "hard" | "soft";
    value: string;
  }>;

export type ThProps = GenericProps &
  Partial<{
    colspan: number;
    rowspan: number;
    scope: string;
    abbr: string;
  }>;

export type TimeProps = GenericProps &
  Partial<{
    datetime: string;
  }>;

export type TrackProps = GenericProps &
  Partial<{
    src: string;
    kind: string;
    srclang: string;
    label: string;
    default: boolean;
  }>;

export type VideoProps = GenericProps &
  Partial<{
    autoplay: boolean;
    controls: boolean;
    loop: boolean;
    muted: boolean;
    poster: string;
    preload: string;
    src: string;
  }>;

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

    element.attributes.push(
      { key: key.toLowerCase(), value: value }
    )
  });
}
