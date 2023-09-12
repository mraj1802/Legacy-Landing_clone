import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import classes from "./OurMission.module.css";
import mountain from "/public/about/mountain.png";

const OurMission = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.textContainer}>
          <Box>
            <Typography
              variant="h2"
              fontWeight="700"
              color={theme.palette.neutral.lighter}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              mt="22px"
              fontWeight="500"
              color={theme.palette.neutral.lighter}
            >
              To ensure that estate planning is inclusive of all assets
              (physical and digital) and a legacy is truly passed in accordance
              with the owner’s personal intent.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              mt="42px"
              fontWeight="700"
              color={theme.palette.neutral.lighter}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              mt="22px"
              fontWeight="500"
              color={theme.palette.neutral.lighter}
            >
              To lead the frontier in EstateTech and be the future of Digital
              Inheritance Technology.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Image src={mountain} alt="mountain" />
        </Box>
      </Container>
    </Box>
  );
};

export default OurMission;
