"use client";
import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import SecurityInsights from "../../src/elements/security/SecurityInsights/SecurityInsights";
import TextImageShowcase from "../../src/elements/security/TextImageShowcase/TextImageShowcase";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import hero from "/public/security/hero.webp";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-50px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const Security = () => {
  const theme = useTheme();
  const watch = useMediaQuery("(max-width:500px)");
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box>
      <title>
        Ensuring Your Digital Assets & Data are Secured & Protected | Legacy
        Suite
      </title>
      <meta
        name="description"
        content="Get Digital Data protection & Dashlane password management with Legacy Suite's password security service. This Data Privacy Company helps you secure your personal digital assets in a central location that only you & the trusted contacts can access."
      />
      <meta
        name="keywords"
        content="digital asset security,digital data protection,Data Privacy Companies"
      />
      <Navbar />
      <Hero
        imageStyles={{ ...style }}
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "70px" } }}
            component="h1"
          >
            Secure Your <span style={{ ...boldStyle }}>DIGITAL ASSETS </span>
            with Us!
          </Typography>
        }
        image={hero}
        text="Legacy Suite helps you secure all your personal data in one central location that only you and the trusted contacts you choose to share that information with can access."
        textMaxWidth="558px"
        btnText="Let's Talk"
        landingButton={false}
        secondaryGradient={true}
      />

      {!watch && (
        <div
          style={{
            width: "100%",
            height: "0px",
            position: "relative",
            paddingBottom: "56.250%",
          }}
        >
          <iframe
            src="https://streamable.com/e/k05s2s?autoplay=1"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      )}
      <SecureByCarousel marginTop="180px !important" />
      <SecurityInsights />
      <TextImageShowcase />
      <SymbolicAndArtistic />
      <Footer />
    </Box>
  );
};

export default Security;
