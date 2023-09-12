import { Box } from "@mui/material";
import * as React from "react";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import Tag from "../../../components/Tag/Tag";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./PasswordManagement.module.css";
import password from "/public/landing/password.svg";

const passwordManagement = {
  heading: "LegacyPass™",
  text: "LegacyPass™ is a blockchain-based password manager, designed to provide secure and user-friendly password storage and sharing. Built on top of a blockchain, it ensures the highest level of security and privacy while enabling users to easily store, manage, and share their passwords.",
  type: "secondary",
};
const PasswordManagement = () => {
  return (
    <Box className={classes.root}>
      <Tag text="Password Management" />
      <Box pt="42px">
        <TextContainerImageShowcase
          left={
            <HeadingTextButttonShowcase
              maxWidth="600px"
              btnText="Let’s Create"
              {...passwordManagement}
            />
          }
          right={<ImageShowcase src={password} />}
        />
      </Box>
    </Box>
  );
};

export default PasswordManagement;
