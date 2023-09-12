import { Box, Container } from "@mui/material";
import * as React from "react";
import { ITextContainerImageShowcaseProps } from "../../interfaces/components/TextContainerImageShowcase/textContainerImageShowcase";
import classes from "./TextContainerImageShowcase.module.css";

const TextContainerImageShowcase = ({
  left,
  right,
  gap,
  reverse = false,
}: ITextContainerImageShowcaseProps) => {
  return (
    <Box>
      <Container>
        <Box
          className={classes.root}
          sx={{
            gap: gap,
            "@media (max-width: 1126px)": {
              flexDirection: reverse ? "column-reverse" : "column",
            },
          }}
        >
          <Box>{left}</Box>
          <Box>{right}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TextContainerImageShowcase;
