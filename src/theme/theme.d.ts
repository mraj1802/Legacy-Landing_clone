import { CustomColorTypes, Typography } from "@mui/material";
import * as React from "react";
declare module "@mui/material/styles" {
  interface CustomColorTypes {
    lighter?: React.CSSProperties["color"];
    light?: React.CSSProperties["color"];
    main?: React.CSSProperties["color"];
    dark?: React.CSSProperties["color"];
    darker?: React.CSSProperties["color"];
  }
  interface PaletteColor extends CustomColorTypes {}
  interface Palette {
    primary?: Object<CustomColorTypes>;
    secondary?: Object<CustomColorTypes>;
    info?: Object<CustomColorTypes>;
    success?: Object<CustomColorTypes>;
    warning?: Object<CustomColorTypes>;
    error?: Object<CustomColorTypes>;
    disabled?: Object<CustomColorTypes>;
    neutral?: Object<CustomColorTypes>;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    outline: true;
  }
  interface ExtendButtonTypeMap {
    props: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
    bodyBig: true;
  }
}

declare module "@mui/lab/LoadingButton" {
  interface LoadingButtonProps {
    variant: string;
  }
}
