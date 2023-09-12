import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import * as React from "react";
import classes from "./TeamCard.module.css";

const TeamCard = ({
  coloredImage,
  image,
  name,
  role,
}: {
  image: StaticImageData;
  coloredImage: StaticImageData;
  name: string;
  role: string;
}) => {
  const [toggle, setToggle] = React.useState(false);
  const theme = useTheme();
  const onMouseEnter = () => {
    setToggle(true);
  };
  const onMouseLeave = () => {
    setToggle(false);
  };
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes.root}
    >
      <Box>
        {toggle ? (
          <Image src={coloredImage} alt="person" priority />
        ) : (
          <Image src={image} alt="person" priority />
        )}
      </Box>
      <Box className={classes.textContainer}>
        <Box>
          <Typography variant="h4" fontWeight="700" color="primary.dark">
            {name}
          </Typography>
          <Typography variant="p" fontWeight="500" color="primary.dark">
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamCard;
