import { Box } from "@mui/material";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./SecurityAndPrivacy.module.css";
import security from "/public/landing/security.png";
const left = {
  heading: "We Take Security and Privacy Seriously",
  text: "Our goals are simple: security and privacy. Enable us as your shield to protect your assets and important information. No matter how big or small, we strive to deliver cutting-edge technology and encrypted security. Your peace of mind is our top priority.",
  type: "secondary",
};

const SecurityAndPrivacy = () => {
  return (
    <Box className={classes.root}>
      <TextContainerImageShowcase
        left={<HeadingTextButttonShowcase {...left} />}
        right={<ImageShowcase src={security} />}
        reverse={true}
      />
    </Box>
  );
};
export default SecurityAndPrivacy;
