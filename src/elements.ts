import { Composable } from "compose.js";
import {
    GenericProps,
    RawHTMLElement,
    TextElement,
    Element,
    setupAttributes,
} from "./props.js";

function setupChildren(element: Element, children: any[]) {
    for (const child of children) {
        element.children.push(child);
    }
}

function createElementFactory<T = GenericProps>(
    elementName: string,
    supportsChildren: boolean,
) {
    return Composable<T>(
        (self) => {
            const elem: Element = {
                tagName: elementName,
                attributes: [],
                children: [],
                needCloseTag: supportsChildren
            };

            setupAttributes(elem, self.props as GenericProps);

            if (supportsChildren)
                setupChildren(elem, self.children);

            return elem;
        },
        { hasChildren: supportsChildren },
    );
}

export const Text = Composable<string>((self) =>
    ({
        tagName: '#text',
        attributes: [],
        children: [self.props]
    }) as TextElement
);

export const RawHTML = Composable<string>((self) =>
    ({
        tagName: '#raw-html',
        attributes: [],
        children: [self.props]
    }) as RawHTMLElement
);

export const HTML = createElementFactory("html", true);
export const Anchor = createElementFactory("a", true);
export const Button = createElementFactory("button", true);

export const Div = createElementFactory("div", true);
export const Input = createElementFactory("input", false);
export const Image = createElementFactory("img", false);
export const TextArea = createElementFactory("textarea", true);

export const Abbr = createElementFactory("abbr", true);
export const Address = createElementFactory("address", true);
export const Area = createElementFactory("area", false);
export const Article = createElementFactory("article", true);
export const Aside = createElementFactory("aside", true);
export const Audio = createElementFactory("audio", true);
export const B = createElementFactory("b", true);
export const Base = createElementFactory("base", false);
export const Bdi = createElementFactory("bdi", true);
export const Bdo = createElementFactory("bdo", true);
export const Blockquote = createElementFactory(
    "blockquote",
    true,
);
export const Body = createElementFactory("body", true);
export const Br = createElementFactory("br", false);
export const Canvas = createElementFactory("canvas", true);
export const Caption = createElementFactory("caption", true);
export const Cite = createElementFactory("cite", true);
export const Code = createElementFactory("code", true);
export const Col = createElementFactory("col", false);
export const Colgroup = createElementFactory("colgroup", true);
export const Data = createElementFactory("data", true);
export const Datalist = createElementFactory("datalist", true);
export const Dd = createElementFactory("dd", true);
export const Del = createElementFactory("del", true);
export const Details = createElementFactory("details", true);
export const Dfn = createElementFactory("dfn", true);
export const Dialog = createElementFactory("dialog", true);
export const Dl = createElementFactory("dl", true);
export const Dt = createElementFactory("dt", true);
export const Em = createElementFactory("em", true);
export const Embed = createElementFactory("embed", false);
export const FieldSet = createElementFactory("fieldset", true);
export const FigCaption = createElementFactory("figcaption", true);
export const Figure = createElementFactory("figure", true);
export const Footer = createElementFactory("footer", true);
export const Form = createElementFactory("form", true);
export const H1 = createElementFactory("h1", true);
export const H2 = createElementFactory("h2", true);
export const H3 = createElementFactory("h3", true);
export const H4 = createElementFactory("h4", true);
export const H5 = createElementFactory("h5", true);
export const H6 = createElementFactory("h6", true);
export const Head = createElementFactory("head", true);
export const Header = createElementFactory("header", true);
export const Hr = createElementFactory("hr", false);
export const Iframe = createElementFactory("iframe", true);
export const Ins = createElementFactory("ins", true);
export const Kbd = createElementFactory("kbd", true);
export const Label = createElementFactory("label", true);
export const Legend = createElementFactory("legend", true);
export const Li = createElementFactory("li", true);
export const Link = createElementFactory("link", false);
export const Main = createElementFactory("main", true);
export const Map = createElementFactory("map", true);
export const Mark = createElementFactory("mark", true);
export const Meta = createElementFactory("meta", false);
export const Meter = createElementFactory("meter", true);
export const Nav = createElementFactory("nav", true);
export const Object = createElementFactory("object", true);
export const Ol = createElementFactory("ol", true);
export const Optgroup = createElementFactory("optgroup", true);
export const Option = createElementFactory("option", true);
export const Output = createElementFactory("output", true);
export const P = createElementFactory("p", true);
export const Param = createElementFactory("param", false);
export const Picture = createElementFactory("picture", true);
export const Pre = createElementFactory("pre", true);
export const Progress = createElementFactory("progress", true);
export const Q = createElementFactory("q", true);
export const Rp = createElementFactory("rp", true);
export const Rt = createElementFactory("rt", true);
export const Ruby = createElementFactory("ruby", true);
export const S = createElementFactory("s", true);
export const Samp = createElementFactory("samp", true);
export const Script = createElementFactory("script", true);
export const Section = createElementFactory("section", true);
export const Select = createElementFactory("select", true);
export const Small = createElementFactory("small", true);
export const Source = createElementFactory("source", false);
export const Span = createElementFactory("span", true);
export const Strong = createElementFactory("strong", true);
export const Style = createElementFactory("style", true);
export const Sub = createElementFactory("sub", true);
export const Summary = createElementFactory("summary", true);
export const Sup = createElementFactory("sup", true);
export const Svg = createElementFactory("svg", true);
export const Table = createElementFactory("table", true);
export const Tbody = createElementFactory("tbody", true);
export const Td = createElementFactory("td", true);
export const Template = createElementFactory("template", true);
export const Tfoot = createElementFactory("tfoot", true);
export const Th = createElementFactory("th", true);
export const Thead = createElementFactory("thead", true);
export const Time = createElementFactory("time", true);
export const Title = createElementFactory("title", true);
export const Tr = createElementFactory("tr", true);
export const Track = createElementFactory("track", false);
export const U = createElementFactory("u", true);
export const Ul = createElementFactory("ul", true);
export const Var = createElementFactory("var", true);
export const Video = createElementFactory("video", true);
export const Wbr = createElementFactory("wbr", false);
