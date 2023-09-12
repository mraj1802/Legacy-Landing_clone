"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import InvestmentProtection from "../../src/elements/crypto/InvestmentProtection/InvestmentProtection";
import MarketCap from "../../src/elements/crypto/MarketCap/MarketCap";
import WhyCrypto from "../../src/elements/crypto/WhyCrypto/WhyCrypto";
import HowItWorksSecondary from "../../src/elements/shared/HowItWorksMarketing/HowItWorksSecondary";
import hero from "/public/crypto/hero.png";

const style: SxProps = {
  marginTop: { md: "-150px", sm: "80px", xs: "100px", lg: "-160px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const Crypto = () => {
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
    <>
      <meta
        name="keywords"
        content="Create a will for your digital assets, including crypto, NFTs, and other blockchain-based assets without sharing private keys."
      />
      <title>Crypto Will, NFT Will & Estate Planning | Legacy Suite</title>
      <meta
        name="description"
        content="Don't let your crypto be lost or mismanaged after you're gone. Learn how to create a crypto will to secure your digital assets for the future."
      ></meta>

      <Navbar />
      <Hero
        imageStyles={{ ...style }}
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "10px" } }}
            component="h1"
          >
            Protect Your
            <span style={{ ...boldStyle }}> Crypto</span> &
            <span style={{ ...boldStyle }}> NFT </span> Assets!
          </Typography>
        }
        image={hero}
        text="Secure your future – create a will for your digital assets, including crypto currencies, NFTs, and other blockchain-based assets."
        textMaxWidth="558px"
        btnText="Let's Protect"
        landingButton={false}
        height="545px"
      />
      <SecureByCarousel margin={true} />
      <WhyCrypto />
      <HowItWorksSecondary
        heading="How It Works?"
        text="Our smart contracts allow you to pledge your Crypto/NFT assets to your beneficiaries without sharing sensitive information."
        btnText="Get Started"
        secondary={false}
        forWallet={true}
        {...howItWorksData}
      />
      <MarketCap />
      <InvestmentProtection />
      {/* If you want lifeline and will section use below code */}
      {/* <Wills />
      <LifeLine /> */}
      {/* <SymbolicAndArtistic
        heading="Get Started Now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      /> */}
      <Footer />
    </>
  );
};

const howItWorksData = {
  headingOne: "Connect",
  textOne: "Connect your wallet to create a will for your digital assets.",
  headingTwo: "Allocate",
  textTwo: "Identify which assets should be allocated to your will.",
  headingThree: "Assign",
  textThree: "Assign the assets to selected beneficiaries.",
  headingFour: "Maintain",
  textFour:
    "Regularly review your Will to ensure that your intentions are up-to-date.",
};

export default Crypto;
