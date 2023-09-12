import { Box, Typography, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import classes from "./SecurityInsightsCard.module.css";
const SecurityInsightsCard = ({
  image,
  text,
  heading,
  secondary = false,
}: {
  image: StaticImageData;
  text: string;
  heading: string;
  secondary?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Box>
        <Image src={image} alt="icon" />
      </Box>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="700"
          color={
            secondary
              ? theme.palette.neutral.lighter
              : theme.palette.primary.dark
          }
          mt={2}
        >
          {heading}
        </Typography>
        <Typography
          variant="p"
          component="p"
          fontWeight="600"
          color={
            secondary
              ? theme.palette.neutral.lighter
              : theme.palette.primary.dark
          }
          mt={2}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default SecurityInsightsCard;
