import { Box } from "@mui/material";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./TextImageShowcase.module.css";
import bit from "/public/security/bit.png";
import donut from "/public/security/donut.png";
import mobile from "/public/security/mobile.png";

const secure = {
  heading: "Secure Assets",
  text: "Our backup wallet will facilitate the secure transfer of all your assets with just one click. The ownership of assets is never transferred to Legacy Suite, not even for escrow or temporary hold.",
  type: "secondary",
  btnText: "Learn More",
};
const smart = {
  heading: "Smart Contracts",
  text: "Smart Contracts enable the most secure way of transacting crypto assets while keeping your complete ownership. Inheritance will be transferred directly by the percentages you have defined for your beneficiaries in the event of death.",
  type: "secondary",
  btnText: "Learn More",
};
const information = {
  heading: "Your information is safe",
  text: "We use The Advanced Encryption Standard - AES 256 (NSA Recommended) combined with Magic. Only you can access and unlock all the sensitive data. We only allow mainstream email providers and do not allow work email to sign up, so you never lose access.",
  type: "secondary",
  btnText: "Learn More",
};

const TextImageShowcase = () => {
  return (
    <Box className={classes.root}>
      <Box>
        <TextContainerImageShowcase
          left={<HeadingTextButttonShowcase {...secure} />}
          right={<ImageShowcase src={bit} />}
          reverse={true}
        />
      </Box>
      <Box mt="72px">
        <TextContainerImageShowcase
          right={<HeadingTextButttonShowcase {...smart} />}
          left={<ImageShowcase src={mobile} />}
        />
      </Box>
      <Box mt="72px">
        <TextContainerImageShowcase
          left={<HeadingTextButttonShowcase {...information} />}
          right={<ImageShowcase src={donut} />}
          reverse={true}
        />
      </Box>
    </Box>
  );
};

export default TextImageShowcase;
