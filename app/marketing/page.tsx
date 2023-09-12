"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import Hero from "../../src/components/Hero/Hero";
import MarketingFooter from "../../src/components/MarketingFooter/MarketingFooter";
import MarketingNavbar from "../../src/components/MarketingNavbar/MarketingNavbar";
import QuoteCarousel from "../../src/components/QuoteCarousel/QuoteCarousel";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import Tag from "../../src/components/Tag/Tag";
import Video from "../../src/components/Video/Video";
import FAQs from "../../src/elements/faqs/FAQs/FAQs";
import SuitesStepper from "../../src/elements/home/SuitesStepper/SuitesStepper";
import SecurityInsights from "../../src/elements/security/SecurityInsights/SecurityInsights";
import background from "/public/marketing/marketing.png";

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
      <Hero
        imageStyles={{ marginTop: "-210px", marginLeft: "40px" }}
        heading={
          blockchain ? (
            <Typography
              variant="h1"
              component="h1"
              color={theme.palette.neutral.lighter}
            >
              Ensuring your <span style={{ ...boldStyle }}>Crypto </span>
              <br />
              and <span style={{ ...boldStyle }}>NFT</span> assets are
              <span style={{ ...boldStyle }}> PROTECTED</span>
            </Typography>
          ) : (
            <Typography variant="h1" color={theme.palette.neutral.lighter}>
              Ensuring your{" "}
              <span style={{ ...boldStyle }}>Digital Assets </span>
              and <span style={{ ...boldStyle }}>MEMORIES</span> are
              <span style={{ ...boldStyle }}> PROTECTED</span>
            </Typography>
          )
        }
        text={
          blockchain ? (
            <span>
              Establish your Crypto and NFT Will to safeguard your decentralized
              assets for ERC 20 -721, and enable a secure backup and beneficiary
              wallet for your protection.
              <br />
              <br />
              <b>Initiate Your 14-Day Free Trial Now!</b>
            </span>
          ) : (
            <span>
              What happens to all your assets and personal information stored in
              “the cloud” if you’re no longer here?
              <br />
              <br />
              <b>Start your 14-day Free Trial Now</b>
            </span>
          )
        }
        textMaxWidth="520px"
        image={background}
        btnText="Start a trial"
        forMarketing={true}
      />
      <Tag />
      <SecureByCarousel />
      <Video videoSrc="https://streamable.com/e/0kb1wh?nocontrols=1&loop=0" />
      <SuitesStepper />
      <SecurityInsights />
      <QuoteCarousel forMarketing={true} />
      <FAQs forMarketing={true} />
      <MarketingFooter />
    </Box>
  );
};

export default Page;
