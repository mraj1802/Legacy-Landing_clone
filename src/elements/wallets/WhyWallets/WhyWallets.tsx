import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import * as React from "react";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./WhyWallets.module.css";
import eye from "/public/wallets/eye.png";

const WhyWallets = ({
  heading,
  text,
  image,
  padding,
  btnText = "GET STARTED",
}: {
  heading: string;
  text: string;
  image: StaticImageData;
  padding?: string;
  btnText?: string;
}) => {
  const left = {
    heading: heading,
    text: text,
    type: "secondary",
    textComponent: "h3",
  };
  return (
    <Box className={classes.root} sx={{ padding: padding }}>
      <TextContainerImageShowcase
        left={
          <HeadingTextButttonShowcase
            button={true}
            maxWidth="500px"
            btnText={btnText}
            {...left}
            textFontWeight="600"
          />
        }
        right={<ImageShowcase src={image} />}
        reverse={true}
      />
    </Box>
  );
};

export default WhyWallets;
