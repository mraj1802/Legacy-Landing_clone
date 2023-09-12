"use client";
import { Box, SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import PricingPlans from "../../src/elements/pricing/PricingPlans/PricingPlans";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import hero from "/public/pricing/hero.png";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "0px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const Pricing = () => {
  const theme = useTheme();
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textTransform: "uppercase",
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box>
      <Navbar />
      <Hero
        imageStyles={{ ...style }}
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "50px" } }}
          >
            Protect Your <span style={{ ...boldStyle }}>Digital Assets </span>
            with Us!
          </Typography>
        }
        image={hero}
        text="Legacy Suite helps you securely transfer all digital assets to preserve your digital life. Start your free trial today."
        textMaxWidth="558px"
        btnText="Let's Talk"
        landingButton={false}
        height="645px"
      />
      <PricingPlans />

      <SymbolicAndArtistic
        heading="Get started now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      />
      <Footer />
    </Box>
  );
};

export default Pricing;
