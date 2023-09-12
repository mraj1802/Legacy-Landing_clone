import { Box, Typography, useTheme } from "@mui/material";
import * as React from "react";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./WhyCrypto.module.css";
import file from "/public/crypto/file.png";

const WhyCrypto = () => {
  const theme = useTheme();
  const left = {
    heading: "Why Crypto/NFT Will?",
    text: "Provide clear instructions of whom you want your crypto assets to be transferred to and how much you want to transfer assigning multiple beneficiaries without sharing private keys. Protect Your crypto legacy and create a Will for your digital assets now.",
    type: "secondary",
    textComponent: "h3",
  };
  return (
    <Box>
      <Box className={classes.root}>
        <TextContainerImageShowcase
          left={
            <HeadingTextButttonShowcase
              button={false}
              maxWidth="600px"
              {...left}
            />
          }
          right={<ImageShowcase src={file} />}
          reverse={true}
        />
      </Box>
    </Box>
  );
};

export default WhyCrypto;
