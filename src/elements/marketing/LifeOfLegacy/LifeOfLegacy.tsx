import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import * as React from "react";
import circleOne from "/public/marketing/circle-1.svg";
import circleTwo from "/public/marketing/circle-2.svg";
import icon from "/public/marketing/icon.svg";
import classes from "./LifeOfLegacy.module.css";
import Parallelogram from "../../../components/Parallelogram/Parallelogram";
import Fade from "../../Animation/Fade/Fade";

const LifeOfLegacy = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: "#0B3167" }}>
      1
      <Container>
        <Fade left={true}>
          <Typography
            variant="h2"
            color="neutral.lighter"
            textAlign="center"
            fontWeight="700"
            mt="72px"
          >
            A Day in the Life of a Legacy Suite User?
          </Typography>
        </Fade>
        <Fade>
          <Typography
            variant="body1"
            color="neutral.lighter"
            textAlign="center"
            fontWeight="400"
            m="auto"
            mt="22px"
            maxWidth={"883px"}
          >
            Legacy Suite is a Secure Self-Custody Solution that is Smart
            Contract Based to Automatically Protect You and Your Loved Ones.
          </Typography>
        </Fade>
        <Box className={classes.imageContainer}>
          <Box className={classes.infoGraphics}>
            <Box>
              <Image src={circleOne} alt="" />
            </Box>
            <Parallelogram className={classes.parallel}>
              <Box className={classes.box}>
                <Typography
                  variant="h5"
                  color={theme.palette.secondary.main}
                  maxWidth="438px"
                  px="20px"
                  py="10px"
                >
                  Design your Wallet Recovery System in Case of Lost Keys or a
                  Compromised Wallet
                </Typography>
              </Box>
            </Parallelogram>
          </Box>
          <Box className={classes.icon}>
            <Image src={icon} alt="" />
          </Box>
          <Box className={classes.infoGraphics}>
            <Box>
              <Image src={circleTwo} alt="" />
            </Box>
            <Parallelogram className={classes.parallel}>
              <Box className={classes.box}>
                <Typography
                  variant="h5"
                  color={theme.palette.secondary.main}
                  maxWidth="400px"
                  p="10px"
                >
                  Designate Beneficiaries and Distribute Assets After Death
                </Typography>
              </Box>
            </Parallelogram>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LifeOfLegacy;
