export type HeadingTextButtonShowcaseProps = {
  type: string = "primary" | "secondary";
  heading: string;
  text: string;
  maxWidth?: string;
  btnText?: string | boolean;
  btnLink?: string;
  component?: any;
  textComponent?: any;
  button?: boolean;
  textFontWeight?: string;
};
