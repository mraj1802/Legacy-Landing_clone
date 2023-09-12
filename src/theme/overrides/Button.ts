import { pxToRem } from "../themeUtils/utils";

type ResponsiveButton = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
};

type ResponsiveButtonPadding = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

function responsiveButtonSizes({ xs, sm, md, lg }: ResponsiveButton) {
  return {
    "@media (min-width: 359px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:960px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
  };
}
function responsiveButtonPadding({ xs, sm, md, lg }: ResponsiveButtonPadding) {
  return {
    "@media (min-width: 359px)": {
      padding: xs,
    },
    "@media (min-width:600px)": {
      padding: sm,
    },
    "@media (min-width:960px)": {
      padding: md,
    },
    "@media (min-width:1280px)": {
      padding: lg,
    },
  };
}
export default function Button(theme: any) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: theme.palette.neutral.lighter,
            color: theme.palette.primary.dark,
            textTransform: "uppercase",
            fontFamily: "inherit",
            fontWeight: "600",
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transitoin: "all 0.5s",
            ...responsiveButtonSizes({ xs: 14, sm: 14, md: 15, lg: 15 }),
            ...responsiveButtonPadding({
              xs: "0.5rem 1rem",
              sm: "0.5rem 1rem",
              md: "0.5rem 1.5rem",
              lg: "0.5rem 2rem",
            }),

            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: theme.palette.primary.dark,
            color: theme.palette.neutral.lighter,
            fontFamily: "inherit",
            textTransform: "uppercase",
            fontWeight: "600",
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transitoin: "all 0.5s",
            ...responsiveButtonSizes({ xs: 14, sm: 14, md: 15, lg: 15 }),
            ...responsiveButtonPadding({
              xs: "0.5rem 1rem",
              sm: "0.5rem 1rem",
              md: "0.5rem 1.5rem",
              lg: "0.5rem 2rem",
            }),

            "&:hover": {
              backgroundColor: theme.palette.info.dark,
            },
          },
        },
        {
          props: { variant: "outline" },
          style: {
            color: theme.palette.neutral.lighter,
            fontFamily: "inherit",
            fontWeight: "600",
            textTransform: "uppercase",
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transitoin: "all 0.5s",
            border: "2px solid #fff",
            ...responsiveButtonSizes({ xs: 14, sm: 14, md: 15, lg: 15 }),
            ...responsiveButtonPadding({
              xs: "0.5rem 1rem",
              sm: "0.5rem 1rem",
              md: "0.5rem 1.5rem",
              lg: "0.5rem 2rem",
            }),

            "&:hover": {
              backgroundColor: theme.palette.info.dark,
            },
          },
        },
      ],
    },
  };
}
