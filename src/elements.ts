import { Composable } from "compose.js";
import {
  AbbrProps,
  AnchorProps,
  AreaProps,
  AudioProps,
  BaseProps,
  BdiProps,
  BdoProps,
  BlockquoteProps,
  ButtonProps,
  CanvasProps,
  ColProps,
  ColgroupProps,
  DataProps,
  DelProps,
  DetailsProps,
  DialogProps,
  Element,
  EmbedProps,
  FieldSetProps,
  FormProps,
  GenericProps,
  HTMLProps,
  IframeProps,
  ImageProps,
  InputProps,
  InsProps,
  LabelProps,
  LiProps,
  LinkProps,
  MapProps,
  MetaProps,
  MeterProps,
  ObjectProps,
  OlProps,
  OptgroupProps,
  OptionProps,
  OutputProps,
  ParamProps,
  ProgressProps,
  QProps,
  RawHTMLElement,
  ScriptProps,
  SelectProps,
  SourceProps,
  StyleProps,
  SvgProps,
  TdProps,
  TextAreaProps,
  TextElement,
  ThProps,
  TimeProps,
  TrackProps,
  VideoProps,
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

export const HTML = createElementFactory<HTMLProps>("html", true);
export const Anchor = createElementFactory<AnchorProps>("a", true);
export const Button = createElementFactory<ButtonProps>("button", true);

export const Div = createElementFactory("div", true);
export const Input = createElementFactory<InputProps>("input", false);
export const Image = createElementFactory<ImageProps>("img", false);
export const TextArea = createElementFactory<TextAreaProps>("textarea", true);

export const Abbr = createElementFactory<AbbrProps>("abbr", true);
export const Address = createElementFactory("address", true);
export const Area = createElementFactory<AreaProps>("area", false);
export const Article = createElementFactory("article", true);
export const Aside = createElementFactory("aside", true);
export const Audio = createElementFactory<AudioProps>("audio", true);
export const B = createElementFactory("b", true);
export const Base = createElementFactory<BaseProps>("base", false);
export const Bdi = createElementFactory<BdiProps>("bdi", true);
export const Bdo = createElementFactory<BdoProps>("bdo", true);
export const Blockquote = createElementFactory<BlockquoteProps>(
  "blockquote",
  true,
);
export const Body = createElementFactory("body", true);
export const Br = createElementFactory("br", false);
export const Canvas = createElementFactory<CanvasProps>("canvas", true);
export const Caption = createElementFactory("caption", true);
export const Cite = createElementFactory("cite", true);
export const Code = createElementFactory("code", true);
export const Col = createElementFactory<ColProps>("col", false);
export const Colgroup = createElementFactory<ColgroupProps>("colgroup", true);
export const Data = createElementFactory<DataProps>("data", true);
export const Datalist = createElementFactory("datalist", true);
export const Dd = createElementFactory("dd", true);
export const Del = createElementFactory<DelProps>("del", true);
export const Details = createElementFactory<DetailsProps>("details", true);
export const Dfn = createElementFactory("dfn", true);
export const Dialog = createElementFactory<DialogProps>("dialog", true);
export const Dl = createElementFactory("dl", true);
export const Dt = createElementFactory("dt", true);
export const Em = createElementFactory("em", true);
export const Embed = createElementFactory<EmbedProps>("embed", false);
export const FieldSet = createElementFactory<FieldSetProps>("fieldset", true);
export const FigCaption = createElementFactory("figcaption", true);
export const Figure = createElementFactory("figure", true);
export const Footer = createElementFactory("footer", true);
export const Form = createElementFactory<FormProps>("form", true);
export const H1 = createElementFactory("h1", true);
export const H2 = createElementFactory("h2", true);
export const H3 = createElementFactory("h3", true);
export const H4 = createElementFactory("h4", true);
export const H5 = createElementFactory("h5", true);
export const H6 = createElementFactory("h6", true);
export const Head = createElementFactory("head", true);
export const Header = createElementFactory("header", true);
export const Hr = createElementFactory("hr", false);
export const Iframe = createElementFactory<IframeProps>("iframe", true);
export const Ins = createElementFactory<InsProps>("ins", true);
export const Kbd = createElementFactory("kbd", true);
export const Label = createElementFactory<LabelProps>("label", true);
export const Legend = createElementFactory("legend", true);
export const Li = createElementFactory<LiProps>("li", true);
export const Link = createElementFactory<LinkProps>("link", false);
export const Main = createElementFactory("main", true);
export const Map = createElementFactory<MapProps>("map", true);
export const Mark = createElementFactory("mark", true);
export const Meta = createElementFactory<MetaProps>("meta", false);
export const Meter = createElementFactory<MeterProps>("meter", true);
export const Nav = createElementFactory("nav", true);
export const Object = createElementFactory<ObjectProps>("object", true);
export const Ol = createElementFactory<OlProps>("ol", true);
export const Optgroup = createElementFactory<OptgroupProps>("optgroup", true);
export const Option = createElementFactory<OptionProps>("option", true);
export const Output = createElementFactory<OutputProps>("output", true);
export const P = createElementFactory("p", true);
export const Param = createElementFactory<ParamProps>("param", false);
export const Picture = createElementFactory("picture", true);
export const Pre = createElementFactory("pre", true);
export const Progress = createElementFactory<ProgressProps>("progress", true);
export const Q = createElementFactory<QProps>("q", true);
export const Rp = createElementFactory("rp", true);
export const Rt = createElementFactory("rt", true);
export const Ruby = createElementFactory("ruby", true);
export const S = createElementFactory("s", true);
export const Samp = createElementFactory("samp", true);
export const Section = createElementFactory("section", true);
export const Select = createElementFactory<SelectProps>("select", true);
export const Small = createElementFactory("small", true);
export const Source = createElementFactory<SourceProps>("source", false);
export const Span = createElementFactory("span", true);
export const Strong = createElementFactory("strong", true);
export const Style = createElementFactory<StyleProps>("style", false);
export const Sub = createElementFactory("sub", true);
export const Summary = createElementFactory("summary", true);
export const Sup = createElementFactory("sup", true);
export const Svg = createElementFactory<SvgProps>("svg", true);
export const Table = createElementFactory("table", true);
export const Tbody = createElementFactory("tbody", true);
export const Td = createElementFactory<TdProps>("td", true);
export const Template = createElementFactory("template", true);
export const Tfoot = createElementFactory("tfoot", true);
export const Th = createElementFactory<ThProps>("th", true);
export const Thead = createElementFactory("thead", true);
export const Time = createElementFactory<TimeProps>("time", true);
export const Title = createElementFactory("title", true);
export const Tr = createElementFactory("tr", true);
export const Track = createElementFactory<TrackProps>("track", false);
export const U = createElementFactory("u", true);
export const Ul = createElementFactory("ul", true);
export const Var = createElementFactory("var", true);
export const Video = createElementFactory<VideoProps>("video", true);
export const Wbr = createElementFactory("wbr", false);
