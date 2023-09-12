import { Box, Button, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import Fade from "../../elements/Animation/Fade/Fade";
import { HeadingTextButtonShowcaseProps } from "../../interfaces/components/HeadingTextButtonShowcase/headingTextButtonShowcase";
import classes from "./HeadingTextButttonShowcase.module.css";

const HeadingTextButttonShowcase = ({
  type = "primary",
  heading,
  text,
  maxWidth = "558px",
  btnText = "INITIATE LAUNCH",
  btnLink = "https://app.legacysuite.com/",
  component = "h3",
  textComponent = "p",
  textFontWeight = "500",
  button = true,
}: HeadingTextButtonShowcaseProps) => {
  const theme = useTheme();
  return (
    <Box className={classes.root} sx={{ maxWidth: maxWidth }}>
      <Fade left={true}>
        <Typography
          variant="h2"
          color={
            type === "primary"
              ? theme.palette.primary.dark
              : theme.palette.neutral.lighter
          }
          fontWeight="700"
          component={component ? component : "h3"}
        >
          {heading}
        </Typography>
      </Fade>
      <Fade>
        <Typography
          variant="p"
          color={
            type === "primary"
              ? theme.palette.primary.dark
              : theme.palette.neutral.lighter
          }
          fontWeight={textFontWeight}
          mt="22px"
          lineHeight={"26px"}
          component={textComponent}
        >
          {text}
        </Typography>
      </Fade>
      {button && (
        <Fade>
          <Link href={btnLink}>
            <Button
              variant={type === "primary" ? "secondary" : "primary"}
              className={classes.btn}
            >
              {btnText}
            </Button>
          </Link>
        </Fade>
      )}
    </Box>
  );
};

export default HeadingTextButttonShowcase;
