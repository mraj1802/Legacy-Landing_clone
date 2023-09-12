"use client";
import { Box, SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import HowItWorks from "../../src/components/HowItWorks/HowItWorks";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import BehindTheScene from "../../src/elements/about/BehindTheScene/BehindTheScene";
import OurMission from "../../src/elements/about/OurMission/OurMission";
import OurTerritory from "../../src/elements/about/OurTerritory/OurTerritory";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import about from "/public/about/background.png";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "0px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};
const howItWorksData = {
  headingOne: "Create Your Account",
  textOne:
    "Legitimize your legacy by establishing your account, drafting your wills, and recordkeeping your assets on the go.",
  headingTwo: "Add Trusted Contacts",
  textTwo: "Add loved ones and delegate access for all accounts and asset.",

  headingThree: "Set Your Digital Life",
  textThree:
    "Put your estate plan and digital afterlife on cruise control with this one-stop solution.",
};

export default function About() {
  const theme = useTheme();

  // Heading Styes
  const boldStyle = { color: theme.palette.secondary.main, fontWeight: "700" };
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
            Developers? Marketing Experts? Designers?
            <span style={{ ...boldStyle }}> OLD FASHIOINED</span>, isn’t it.
          </Typography>
        }
        image={about}
        text="We’re thinkers, no. Artists, yes. We are determined to reframe digital utility, to shape and sculpt your legacy. Day in and day out, our artists like to challenge their mantra and are a group of code casters that don’t know when to quit."
        textMaxWidth="660px"
        btnText="Let's Talk"
        landingButton={false}
      />
      <SecureByCarousel margin={true} />
      <OurMission />
      <HowItWorks
        heading="We are the best of the best"
        text="We made the road to your immortality secure, simple, and sustainable. Hop on with us and discover state-of-the-art possibilities that will solidify your legacy."
        {...howItWorksData}
        btnText="Discover"
        btnLink="https://app.legacysuite.com/"
      />

      <BehindTheScene />
      <OurTerritory />
      <SymbolicAndArtistic
        heading="Launch Your Legacy Now"
        text="We help you organize, create, and share essential information to preserve your digital life. Start your trial today."
      />
      <Footer />
    </Box>
  );
}
