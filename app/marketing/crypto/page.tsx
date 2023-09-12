"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import MarketingNavbar from "../../../src/components/MarketingNavbar/MarketingNavbar";
import MarketingHero from "../../../src/elements/marketing/MarketingHero/MarketingHero";
import WeSupport from "../../../src/elements/marketing/WeSupport/WeSupport";
import FAQsSecondary from "../../../src/elements/shared/FAQsSecondary/FAQsSecondary";
import HowItWorksSecondary from "../../../src/elements/shared/HowItWorksMarketing/HowItWorksSecondary";
import MarketingFooterSecondary from "../../../src/elements/shared/MarketingFooterSecondary/MarketingFooterSecondary";
import SecureByCarouselSecondary from "../../../src/elements/shared/SecureByCarouselSecondary/SecureByCarouselSecondary";
import background from "/public/marketing/marketing-dashboard.png";

const Page = () => {
  const theme = useTheme();
  const [blockchain, setBlockChain] = React.useState(false);
  const searchParams = useSearchParams();
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textTransform: "uppercase",
  };
  React.useEffect(() => {
    if (searchParams!.get("blockchain")) {
      setBlockChain(true);
    }
  }, []);
  return (
    <Box>
      <MarketingNavbar />
      <MarketingHero
        imageStyles={{ marginTop: "-290px", marginLeft: "40px" }}
        height="756px"
        heading={
          <Typography
            variant="h1"
            component="h1"
            color={theme.palette.neutral.lighter}
            lineHeight={"50px"}
            fontWeight="700"
            sx={{ position: "relative", zIndex: "1000" }}
          >
            <span style={{ ...boldStyle }}>BACKUP</span> & <br />
            <span style={{ ...boldStyle }}>INHERITANCE </span>
            SUPPORT FOR YOUR DIGITAL WALLET
          </Typography>
        }
        text={
          <span>
            Protecting <span style={{ ...boldStyle }}>crypto </span> &
            <span style={{ ...boldStyle }}> NFT </span>
            Assets
          </span>
        }
        textMaxWidth="500px"
        image={background}
      />
      <div
        style={{
          height: "100%",
          position: "relative",
          paddingBottom: "56.25%",
          margin: "0px",
        }}
      >
        <iframe
          src="https://streamable.com/e/wgdr8l?autoplay=1"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "hidden",
            left: "0px",
            top: "0px",
          }}
        ></iframe>
      </div>
      <HowItWorksSecondary
        heading="How It Works for Wallet Protection?"
        text="Protection against wallet hacks and lost keys by instantly allowing asset transfer to a backup wallet."
        btnText="Get Started"
        {...howItWorksData}
      />
      <HowItWorksSecondary
        heading="How It Works for Digital Inheritance?"
        text="Hold your own keys, set up directives, assign beneficiaries, and safeguard your digital assets."
        btnText="Get Started"
        secondary={true}
        {...howItWorksSecondary}
      />
      <WeSupport />
      <SecureByCarouselSecondary />
      {/* <LifeOfLegacy /> */}
      {/* <SecurityInsightsSecondary /> */}
      <FAQsSecondary />
      <MarketingFooterSecondary />
    </Box>
  );
};

const howItWorksData = {
  headingOne: "Connect Your Wallet",
  textOne: "Choose and connect your wallet to protect all your assets.",
  headingTwo: "Hit Recovery Button",
  textTwo: "Initiate emergency asset transfer process.",
  headingThree: "Pay Gas Fee",
  textThree: "Cover blockchain transaction fees to network validators.",
  headingFour: "Transfer to Backup Wallet",
  textFour: "Import wallet contents to backup via smart contact technology.",
};

const howItWorksSecondary = {
  headingOne: "Connect Your Wallet",
  textOne: "Choose and connect your wallet to protect all your assets.",
  headingTwo: "Select Assets",
  textTwo:
    "Select Crypto Coins & NFTs from your wallet and approve the ones you want to set up beneficiaries for.",
  headingThree: "Assign Beneficiaries",
  textThree:
    "Add compatible wallet addreses of your beneficiaries to claim your assets.",
  headingFour: "Allocate Beneficiary Percentages",
  textFour: "Allocate percentages of Crypto Coins to the listed beneficiaries.",
};

export default Page;
