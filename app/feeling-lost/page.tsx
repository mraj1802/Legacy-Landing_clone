"use client";
import { Box, SxProps, Typography, useTheme } from "@mui/material";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import FeelingLostStepper from "../../src/elements/feeling-lost/FeelingLostStepper/FeelingLostStepper";
import LostForever from "../../src/elements/feeling-lost/LostForever/LostForever";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import feeling from "/public/feelingLost/hero.png";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "0px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const FeelingLost = () => {
  const theme = useTheme();
  return (
    <Box>
      <Navbar />
      <Hero
        imageStyles={{ ...style }}
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "19px" } }}
            fontWeight="700"
          >
            FEELING LOST?
          </Typography>
        }
        image={feeling}
        text="Feeling lost can be a good thing. It means you're realizing that you no longer want what you once did. It means that you're starting to change the way you think—and we believe that's a sign of growth, a revelation to your legacy!"
        textMaxWidth="558px"
        btnText="LET'S TALK"
        landingButton={false}
      />
      <LostForever />
      <FeelingLostStepper />
      <SymbolicAndArtistic
        heading="Get Started Now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      />
      <Footer />
    </Box>
  );
};

export default FeelingLost;
