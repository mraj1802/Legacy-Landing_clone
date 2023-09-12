"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import HowItWorksSecondary from "../../src/elements/shared/HowItWorksMarketing/HowItWorksSecondary";
import WhyWallets from "../../src/elements/wallets/WhyWallets/WhyWallets";
import eye from "/public/wallets/eye.png";
import wallet from "/public/wallets/wallet-monitoring.png";

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
      <title>Self-Custodial Wallet Monitoring & Backup | Legacy Suite</title>
      <meta
        name="description"
        content="Keep your cryptocurrency safe with regular wallet monitoring. Learn how to detect suspicious activity and protect your funds from theft."
      ></meta>
      <meta
        name="keywords"
        content="Keep your crypto assets safe and secure with wallet monitoring and backup. We protect you from hacks, theft, and cyber threats."
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
            WALLET MONITORING
          </Typography>
        }
        text={
          <span>
            Our wallet monitoring with advanced technology is designed to keep
            your crypto assets safe and secure at all times. With wallet
            monitoring and backup solutions, stay informed about what&apos;s
            happening with your wallet and take action quickly to prevent
            potential losses.
          </span>
        }
        btnText="Let's Create"
        btnLink="https://app.legacysuite.com"
        landingButton={false}
        image={wallet}
        imageStyles={{ ...style }}
        textMaxWidth={{ lg: "520px", md: "400px" }}
        textVariant="h5"
        secondaryGradient={true}
        nonCustodialTag={true}
        height="640px"
      />
      <SecureByCarousel />
      <WhyWallets
        heading="Why Wallet Monitoring?"
        text="Our dedicated crypto wallet monitoring service helps notify and protect your cryptocurrency assets from hacks, theft, and cybercrime threats. Regular wallet monitoring helps keep your cryptocurrency safe and informs you of your wallet's status so you can respond immediately to suspicious activity."
        image={eye}
        padding={"50px"}
      />
      <HowItWorksSecondary
        heading="How It Works?"
        text="We protect you from hacks, theft, and cyber threats."
        btnText="Get Started"
        secondary={false}
        forWallet={true}
        {...howItWorksData}
      />
      <Footer />
    </>
  );
};
const howItWorksData = {
  headingOne: "Connectivity",
  textOne:
    "Connect multiple crypto currency wallets to our platform, and get notified of every transaction.",
  headingTwo: "Channels",
  textTwo:
    "Our advanced blockchain technology channels your wallets for any suspicious activity and alerts you in real-time.",
  headingThree: "Alerts",
  textThree:
    "Get notified on inbound and outbound transactions. Receive alerts and notifications, to take action quickly to prevent any potential losses.",
  headingFour: "Stay Informed",
  textFour:
    "Stay informed about your crypto assets and make informed decisions about your spending and investments.",
};

export default Home;
