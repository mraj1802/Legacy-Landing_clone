import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import classes from "./SuccessStory.module.css";
import rocket from "/public/icon/rocket.svg";
import mountain from "/public/suites/mountain.png";

const SuccessStory = ({
  heading = "Success Story",
  text,
  numberOneHeading,
  numberOne,
  numberTwoHeading,
  numberTwo,
}: {
  heading?: "Success Story";
  text: string | React.ReactNode;
  numberOneHeading: string;
  numberOne: string;
  numberTwoHeading: string;
  numberTwo: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingBottom: "72px",
      }}
      className={classes.bg}
    >
      <Container className={classes.root}>
        <Box className={classes.textContainer}>
          <Typography
            variant="h2"
            sx={{ whiteSpace: "normal", marginBottom: "12px" }}
            fontWeight="700"
            color={theme.palette.neutral.lighter}
            component="h2"
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            fontWeight={500}
          >
            {text}
          </Typography>

          <Box className={classes.number}>
            <Box>
              <Typography
                variant="h3"
                component="p"
                color={theme.palette.secondary.main}
                fontWeight={700}
                className={classes.digit}
              >
                {numberOne}+
              </Typography>
              <Typography
                variant="p"
                component="p"
                color="white"
                fontWeight={500}
                className={classes.text}
              >
                {numberOneHeading}
              </Typography>
            </Box>
            <Box>
              <Image src={rocket} alt="rocket" />
            </Box>
            <Box>
              <Typography
                variant="h3"
                component="p"
                color={theme.palette.secondary.main}
                fontWeight={700}
                className={classes.digit}
              >
                {numberTwo}+
              </Typography>
              <Typography
                variant="p"
                component="p"
                color="white"
                fontWeight={500}
                className={classes.text}
              >
                {numberTwoHeading}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <ImageShowcase src={mountain} />
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStory;
