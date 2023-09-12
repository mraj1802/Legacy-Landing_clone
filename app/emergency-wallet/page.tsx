"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import WeSupport from "../../src/elements/marketing/WeSupport/WeSupport";
import HowItWorksSecondary from "../../src/elements/shared/HowItWorksMarketing/HowItWorksSecondary";
import WhyWallets from "../../src/elements/wallets/WhyWallets/WhyWallets";
import emergency from "/public/wallets/emergency.png";
import mobile from "/public/wallets/mobile.png";

const Home = () => {
  const theme = useTheme();
  const style: SxProps = {
    marginTop: { lg: "-240px", md: "-240px" },
    "@media (max-width: 572px)": {
      marginTop: "30px",
    },
  };
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
    <>
      <title>
        Self-Custodial Emergency Backup Wallet Protection | Legacy Suite
      </title>
      <meta
        name="description"
        content="Protect your digital assets from cyber threats, theft, and data breaches. Discover best solution for digital asset protection."
      ></meta>
      <meta
        name="keywords"
        content="Quickly transfer your crypto assets to an emergency backup wallet in case of a security breach or loss of private keys. "
      />
      <Navbar />
      <Hero
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "10px", md: "-10px" } }}
            fontWeight="700"
            component="h1"
          >
            EMERGENCY WALLET
          </Typography>
        }
        text={
          <span>
            Quickly transfer and protect your digital assets to a backup wallet
            in case of security breaches or loss of private keys. Our digital
            asset protection with advance technology protects and provide
            emergency access to your valuable assets with serenity.
          </span>
        }
        btnText="Let's Create"
        btnLink="https://app.legacysuite.com"
        landingButton={false}
        image={emergency}
        imageStyles={{ ...style }}
        textMaxWidth={{ lg: "500px", md: "400px" }}
        textVariant="h5"
        secondaryGradient={true}
        nonCustodialTag={true}
        height="640px"
      />
      <SecureByCarousel />
      <WhyWallets
        heading="Why Emergency Wallet?"
        text="Our emergency wallet, an ultimate solution to protect your assets, provides a secure, convenient and hassle-free solution to back up your blockchain private keys and avoid losing your wallet in security breaches or private key loss."
        image={mobile}
        padding="20px 0px 0px 0px"
      />
      <HowItWorksSecondary
        heading="How It Works?"
        text="Quickly transfer your crypto assets to an emergency backup wallet in case of a security breach, cyber threats, data breaches, or loss of private keys with just one click of a button."
        btnText="Get Started"
        secondary={false}
        forWallet={true}
        {...howItWorksData}
      />
      <WeSupport />
      <Footer />
    </>
  );
};
const howItWorksData = {
  headingOne: "Emergency",
  textOne:
    "In case of a security breach or loss of private keys, trigger your Emergency Wallet to instantly backup your assets.",
  headingTwo: "Transfer",
  textTwo:
    "With just one click, your assets are transferred to a backup wallet, ensuring they remain safe and accessible.",
  headingThree: "Security",
  textThree:
    "Our blockchain mechanism protects your assets during transfer, safeguarding them from potential threats.",
  headingFour: "Peace of mind",
  textFour:
    "With this safety net, you can have peace of mind knowing your assets are protected in any situation.",
};

export default Home;
