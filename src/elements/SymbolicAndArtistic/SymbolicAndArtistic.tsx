import { Box, useTheme } from "@mui/material";
import * as React from "react";
import HeadingTextButttonShowcase from "../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./SymbolicAndArtistic.module.css";
import statue from "/public/landing/statue.png";

const SymbolicAndArtistic = ({
  type = "primary",
  heading = "A statue is a symbolic & artistic form of cementing a legacy.",
  text = "Whatever vision you have for your legacy, start leaving it now. We help you create, organize, and share what’s essential to preserve your digital legacy. Start your free trial today.",
  btnText = "GET STARTED",
  btnLink = "https://app.legacysuite.com/",
}: {
  type?: string;
  heading?: string;
  text?: string;
  btnText?: string;
  btnLink?: string;
}) => {
  const theme = useTheme();
  const left = {
    heading: heading,
    text: text,
    type: type === "primary" ? "primary" : "secondary",
    btnText: btnText,
    textComponent: "h3",
  };
  return (
    <Box
      className={classes.root}
      sx={{
        backgroundColor:
          type === "primary"
            ? theme.palette.neutral.light
            : theme.palette.primary.darker,
      }}
    >
      <TextContainerImageShowcase
        left={
          <HeadingTextButttonShowcase
            btnLink={btnLink ? btnLink : "https://app.legacysuite.com/"}
            maxWidth="600px"
            {...left}
          />
        }
        right={<ImageShowcase src={statue} />}
        reverse={true}
      />
    </Box>
  );
};

export default SymbolicAndArtistic;
