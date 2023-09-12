import * as React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import classes from "./TerritoryCard.module.css";

const TerritoryCard = ({
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
    <Box className={classes.card}>
      <Image src={image} alt="icon" />
      <Typography
        variant="body1"
        fontWeight="700"
        color={theme.palette.neutral.lighter}
        mt="9px"
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        color={theme.palette.neutral.lighter}
        mt="7"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TerritoryCard;
