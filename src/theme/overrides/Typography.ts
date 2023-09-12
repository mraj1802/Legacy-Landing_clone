import { pxToRem } from "../themeUtils/utils";

type ResponsiveFontSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
};

function responsiveFontSizes({ xs, sm, md, lg }: ResponsiveFontSizes) {
  return {
    "@media (max-width:1536px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:1200px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(sm),
    },
    "@media (max-width: 600px)": {
      fontSize: pxToRem(xs),
    },
  };
}

const FONT_PRIMARY = "inherit";
export default function Typography(theme: any) {
  return {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: "40px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 25, sm: 30, md: 35, lg: 40 }),
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "34px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 22, sm: 25, md: 30, lg: 34 }),
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "24px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.primary.dark,
            ...responsiveFontSizes({ xs: 18, sm: 20, md: 22, lg: 24 }),
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontSize: "20px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 16, sm: 18, md: 18, lg: 20 }),
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontSize: "18px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 15, sm: 16, md: 16, lg: 18 }),
          },
        },
        {
          props: { variant: "bodyBig" },
          style: {
            fontSize: "18px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 15, sm: 16, md: 17, lg: 18 }),
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontSize: "16px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.primary.dark,
            ...responsiveFontSizes({ xs: 12, sm: 14, md: 15, lg: 16 }),
          },
        },
        {
          props: { variant: "p" },
          style: {
            fontSize: "14px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 12, sm: 13, md: 14, lg: 14 }),
          },
        },
        {
          props: { variant: "caption" },
          style: {
            fontSize: "12px",
            display: "block",
            fontFamily: FONT_PRIMARY,
            fontWeight: "600",
            color: theme.palette.neutral.dark,
            ...responsiveFontSizes({ xs: 12, sm: 12, md: 12, lg: 12 }),
          },
        },
      ],
    },
  };
}
