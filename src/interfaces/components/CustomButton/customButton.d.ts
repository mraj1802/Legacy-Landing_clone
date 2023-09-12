import { SxProps } from "@mui/material";
import * as React from "react";
export type CustomButtonProps = {
  children?: string | React.ReactNode;
  variant: "primary" | "secondary" | "outline";
  style?: React.CSSProperties;
  sx?: SxProps;
  className?: string;
};
