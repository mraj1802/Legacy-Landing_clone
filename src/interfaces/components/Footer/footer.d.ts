export interface IText {
  text: string;
  link: string;
}
export interface INestedRoute {
  heading: string;
  text: Array<IText>;
}
export interface IFooterProps {
  heading: string;
  link: string;
  text?: Array<IText>;
  nested?: boolean;
  nestedRoute?: Array<INestedRoute>;
  forServices?: boolean;
}
