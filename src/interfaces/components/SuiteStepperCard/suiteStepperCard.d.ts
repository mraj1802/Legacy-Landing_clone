import { StaticImageData } from "next/image";
import * as React from "react";
export interface ISuiteStepperCardProps {
  heading: string;
  text: string | React.ReactNode;
  href: string;
  image: React.ReactNode;
  imageMarginTop?: string;
  paddingTop?: string;
}
