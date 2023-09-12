"use client";
import { Box, SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import DosAndDonts from "../../src/elements/endOfLifeGuru/DosAndDonts/DosAndDonts";
import InsurancePolicy from "../../src/elements/endOfLifeGuru/InsurancePolicy/InsurancePolicy";
import LovedOnes from "../../src/elements/endOfLifeGuru/LovedOnes/LovedOnes";
import TheSteps from "../../src/elements/endOfLifeGuru/TheSteps/TheSteps";
import Glossary from "../../src/elements/faqs/FAQs/Glossary/Glossary";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import guru from "/public/lifeGuru/hero.png";

const Page = () => {
  const theme = useTheme();
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textTransform: "uppercase",
  };
  const style: SxProps = {
    marginTop: { md: "20px", sm: "60px", xs: "100px", lg: "0px" },
    "@media (max-width: 572px)": {
      marginTop: "30px",
    },
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
            sx={{
              marginTop: { lg: "49px", md: "49px", sm: "19px", xs: "40px" },
            }}
            fontWeight="700"
          >
            End-Of-Life
            <span style={{ ...boldStyle }}>&nbsp;Guru</span>
          </Typography>
        }
        image={guru}
        text="Legacy Suite ensures that estate planning is inclusive of all assets (physical and digital) and a legacy is truly passed in accordance with the owner’s personal intent."
        textMaxWidth="660px"
        btnText="Start Claim Assets"
        landingButton={false}
        btnTwoText="Build your Legacy"
      />
      <LovedOnes />
      <TheSteps />
      <InsurancePolicy />
      <DosAndDonts />
      <Glossary />
      <SymbolicAndArtistic
        heading="Get Started Now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      />
      <Footer />
    </Box>
  );
};

export default Page;
