import { Box, Container, Typography, useTheme } from "@mui/material";
import * as React from "react";
import ChooseSuiteCard from "../../../components/ChooseSuiteCard/ChooseSuiteCard";
import { IChooseSuiteProps } from "../../../interfaces/elements/suites/ChooseSuite/chooseSuite";
import Fade from "../../Animation/Fade/Fade";
import classes from "./ChooseSuite.module.css";

const ChooseSuite = ({
  heading,
  text,
  suiteData,
  headingType = "h3",
}: IChooseSuiteProps) => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Container>
        <Fade left={true}>
          <Typography
            variant="h2"
            fontWeight="700"
            component="h2"
            color={theme.palette.neutral.lighter}
            sx={{
              textAlign: "center",
              paddingTop: "72px",
              marginBottom: "22px",
            }}
          >
            {heading}
          </Typography>
        </Fade>
        <Fade>
          <Typography
            variant="body1"
            component={headingType}
            fontWeight={"400"}
            textAlign="center"
            color={theme.palette.neutral.lighter}
          >
            {text}
          </Typography>
        </Fade>
        <Box className={classes.container}>
          {suiteData.map(
            (
              { textOne, headingOne, imageOne, textTwo, headingTwo, imageTwo },
              index
            ) => (
              <Box
                key={index}
                className={`${classes.childContainer} ${
                  index !== suiteData.length - 1 && classes.border
                }`}
              >
                <Box>
                  <Fade left={index % 2 === 0 ? true : false}>
                    <ChooseSuiteCard
                      text={textOne}
                      heading={headingOne}
                      image={imageOne}
                    />
                  </Fade>
                </Box>
                <Box>
                  <Fade left={index % 2 === 0 ? false : true}>
                    <ChooseSuiteCard
                      text={textTwo}
                      heading={headingTwo}
                      image={imageTwo}
                    />
                  </Fade>
                </Box>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ChooseSuite;
