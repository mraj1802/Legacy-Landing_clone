import { Box, Typography, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import classes from "./InvestmentProtectionCard.module.css";

const InvestmentProtectionCard = ({
  image,
  heading,
  text,
}: {
  heading: string;
  text: string;
  image: StaticImageData;
}) => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Box>
        <Image src={image} alt="icon" />
      </Box>
      <Box maxWidth={"320px"} pl="2">
        <Typography
          variant="body1"
          color={theme.palette.primary.dark}
          fontWeight="700"
          mt="16px"
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.primary.dark}
          fontWeight="500"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default InvestmentProtectionCard;
