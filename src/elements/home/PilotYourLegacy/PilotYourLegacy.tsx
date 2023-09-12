import { Box } from "@mui/material";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./PilotYourLegacy.module.css";
import pilot from "/public/landing/pilot.png";

const left = {
  heading: "Pilot your legacy account and estate plan",
  text: "Reality and digital are worlds that collide, and we account for both in your “Suite Life.” We address it all, whether it be your accounts, documents, photos, social media, physical assets, devices, or simple instructions.",
  type: "secondary",
};

const PilotYourLegacy = () => {
  return (
    <Box className={classes.root}>
      <TextContainerImageShowcase
        right={<HeadingTextButttonShowcase {...left} />}
        left={<ImageShowcase src={pilot} />}
      />
    </Box>
  );
};

export default PilotYourLegacy;
