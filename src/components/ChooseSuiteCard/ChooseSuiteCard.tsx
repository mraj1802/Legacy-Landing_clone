import { Box, Typography, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import classes from "./ChooseSuiteCard.module.css";

const ChooseSuiteCard = ({
  image,
  text,
  heading,
}: {
  heading: string;
  image: StaticImageData;
  text: string;
}) => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Box mb={1}>
        <Image src={image} alt="icon" />
      </Box>
      <Box>
        <Typography
          variant="body1"
          component="h2"
          color={theme.palette.neutral.lighter}
          fontWeight="700"
          sx={{ margin: "0px", fontWeight: "700" }}
        >
          {heading}
        </Typography>
        <Typography
          variant="p"
          fontWeight="400"
          component="p"
          mt={1}
          color={theme.palette.neutral.lighter}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChooseSuiteCard;
