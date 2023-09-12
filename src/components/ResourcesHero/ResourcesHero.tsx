import { Box, Container, Typography, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import * as React from "react";
import ImageShowcase from "../ImageShowcase/ImageShowcase";
import classes from "./ResourcesHero.module.css";

const ResourcesHero = ({
  heading,
  text,
  image,
  textPaddingBottom = "40px",
  textMaxWidth = "558px",
}: {
  heading: React.ReactNode;
  text?: string;
  image: StaticImageData;
  textPaddingBottom?: string;
  textMaxWidth?: string;
}) => {
  const theme = useTheme();
  return (
    <Box className={classes.bg}>
      <Container>
        <Box className={classes.root}>
          <Box pb={textPaddingBottom} maxWidth={textMaxWidth}>
            {heading}
            <Typography
              variant="h5"
              mt="30px"
              color={theme.palette.neutral.lighter}
              fontWeight="600"
              component="h4"
            >
              {text}
            </Typography>
          </Box>
          <Box>
            <Box className={classes.img}>
              <ImageShowcase src={image} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesHero;
