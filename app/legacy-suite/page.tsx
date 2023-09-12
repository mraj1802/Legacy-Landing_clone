"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import HowItWorks from "../../src/components/HowItWorks/HowItWorks";
import Navbar from "../../src/components/Navbar/Navbar";
import QuoteCarousel from "../../src/components/QuoteCarousel/QuoteCarousel";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import ChooseSuite from "../../src/elements/suites/ChooseSuite/ChooseSuite";
import SuccessStory from "../../src/elements/suites/SuccessStory/SuccessStory";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import suite from "/public/suites/legacy-suite.png";
import education from "/public/suites/legacy/education.svg";
import legacy from "/public/suites/legacy/legacy.svg";
import life from "/public/suites/legacy/life.svg";
import memories from "/public/suites/legacy/memories.svg";
import messaging from "/public/suites/legacy/messaging.svg";
import news from "/public/suites/legacy/news.svg";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-82px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const LegacySuite = () => {
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
      <title>Legacy Suite</title>
      <meta
        name="description"
        content="From cryptocurrencies to nft, managing digital assets requires specific knowledge and tools. Learn best practices for digital asset management."
      ></meta>
      <Navbar />
      <Hero
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "80px" } }}
            fontWeight="700"
            component="h1"
          >
            LEGACY SUITE <span style={{ ...boldStyle }}>™</span>
          </Typography>
        }
        text={
          <span>
            The <span style={{ ...boldStyle }}>MEMORIES</span> we make with our
            family should last <span style={{ ...boldStyle }}>FOREVER</span>.
            Legacy Suite™ ensures that your legacy and memories are securely
            preserved. Don’t miss out on any special occasion, send future
            messages, and make sure your presence always fills the generation
            gap.
          </span>
        }
        landingButton={false}
        image={suite}
        imageStyles={{ ...style }}
        btnText="Let's Create"
      />
      <SecureByCarousel marginTop="200px !important" />
      <ChooseSuite {...legacySuiteData} />
      <HowItWorks
        heading="How It Works?"
        text="Don’t let anyone rise above you, make your legacy your ladder. Establish best practices for digital asset management."
        btnText="Get Started"
        {...howItWorksData}
      />
      <SuccessStory
        text={
          <span>
            61% of people die without a will all over the world. About 68% of
            Americans alone do not have a will, and only 13% of Americans
            incorporate digital assets in their will.
            <br />
            Legacy Suite offers dedicated solutions for digital assets to ensure
            that your legacy, memories and other digital assets are securely
            preserved and shared to future generations
          </span>
        }
        numberTwoHeading="Legacy Suite
        Registered Users"
        numberTwo="15000"
        numberOne="20"
        numberOneHeading="Countries Covered"
      />
      <QuoteCarousel quoteData={quoteData} />
      <SymbolicAndArtistic
        heading="Get started now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      />
      <Footer />
    </>
  );
};

const quoteData = [
  {
    id: 1,
    text: "I always feared losing my private keys and being locked out of my wallet, and now I feel secure and sleep better at night thanks to this product.",
    author: "-David W-",
  },
  {
    id: 2,
    text: "Legacy Suite will surely be the next must-have platform that everyone will no longer be able to live without. Truly genius.",
    author: "-Patty J-",
  },
];

const legacySuiteData = {
  heading: "Why Choose Legacy Suite™?",
  text: "Your life story is your legacy, and your digital wealth is its currency. So record your life story, and share your legacy wishes with ease. With Legacy Suite™, record future messages and videos, document life events, design end-of-life plans, and store cherished memories in your vault.",
  suiteData: [
    {
      headingOne: "Legacy Journal",
      textOne:
        "Share your personal journey with an unfiltered voice. Here you can document meaningful events, milestones, and achievements in your life that can be written and shared for generations to come.",
      imageOne: legacy,
      headingTwo: "Memories Vault",
      textTwo:
        "Preserve your memories, and keep them well, what you forget you can never retell. Here you can secure files, store images, videos, music, and much more.",
      imageTwo: memories,
    },
    {
      headingOne: "Future Messaging",
      textOne:
        "The choices we make today create the future that we dream of for tomorrow. Here you can schedule a digital time capsule to be sent at some point in the future. Share photos, record videos, send songs, add heartfelt sentiments or even add a wonderful element of surprise, bringing delight to your loved one’s life.",
      imageOne: messaging,
      headingTwo: "End-of-Life Planning",
      textTwo:
        "Don't wait until it's too late to make legacy planning decisions. Declare your funeral planning and advance wills now to provide specific instructions for your final services and eulogy. Prepare a letter to loved ones outlining how they will be managing your digital assets and wishes.",
      imageTwo: life,
    },
    {
      headingOne: "Education Resources",
      textOne:
        "Adequately informing you is our duty. Here you can access webinars, guidance documents, briefs on laws, and tools.",
      imageOne: education,
      headingTwo: "News",
      textTwo:
        "It's not enough to be up to date, you have to be up to tomorrow. Here we keep you informed of the latest trends, changes, news, and relevant changes in digital dynamics.",
      imageTwo: news,
    },
  ],
};

const howItWorksData = {
  headingOne: "Future Messaging",
  componentOne: "h2",
  textOne:
    "Record messages or schedule emails to be shared with loved ones or yourself by selecting a future date.",
  headingTwo: "Legacy Journal",
  componentTwo: "h2",
  textTwo:
    "Jot down your achievements or milestones and share them with future generations.",
  headingThree: "End-of-Life Planning",
  componentThree: "h2",
  textThree:
    "Create instructions on how you would like your final services handled. Outline how your assets should be managed.",
};

export default LegacySuite;
