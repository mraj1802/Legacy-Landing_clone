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
import legal from "/public/suites/legal-suite.png";
import crypto from "/public/suites/legal/crypto.svg";
import health from "/public/suites/legal/health.svg";
import power from "/public/suites/legal/power.svg";
import social from "/public/suites/legal/social.svg";
import trust from "/public/suites/legal/trust.svg";
import will from "/public/suites/legal/will.svg";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-30px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const LegalSuite = () => {
  const theme = useTheme();
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
        Wills, Power of Attorney, Trusts & Estate Planning | Legacy Suite
      </title>
      <meta
        name="description"
        content="Ensure your financial and legal matters are handled according to your wishes. Learn about the different types of power of attorney and how they work."
      />
      <meta
        name="keywords"
        content="Our suite of wills, trusts, directives and power of attorney documents ensures that your financial and legal matters are handled to your wishes."
      />
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
            LEGAL SUITE
          </Typography>
        }
        text={
          <span>
            <span style={{ ...boldStyle }}>FAMILY</span> is not an important
            thing. It’s <span style={{ ...boldStyle }}>EVERYTHING</span>. Legal
            Suite enables you to simplify the complex estate planning process,
            and strengthen every aspect of your family foundation.
          </span>
        }
        btnText="Let's Create"
        btnLink="https://app.legacysuite.com"
        landingButton={false}
        image={legal}
        imageStyles={{ ...style }}
      />
      <SecureByCarousel marginTop="200px !important" />
      <ChooseSuite {...legalSuiteData} />
      <HowItWorks
        heading="How It Works?"
        text="Don’t be deterred by the complexities of estate planning process. We make it simple."
        btnText="Get Started"
        {...howItWorksData}
      />
      <SuccessStory
        text="According to Gallup, 55% of American adults do not
        have a conventional will, let alone standardized
        digital asset management.
        Legal Suite helps you to accomplish the estate
        planning mission, and minimize the cost in doing so."
        numberOne="4000"
        numberTwo="10,000"
        numberTwoHeading="Number of wills
        created thus far."
        numberOneHeading="Add as many wills
        you want."
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

const legalSuiteData = {
  heading: "Why Choose Legal Suite?",
  text: "Legacy is not what you did for yourself, it’s what you did for the next generation. enables you to specify your intentions for family provision and minimize estate planning costs. Update your decisions anytime, anywhere to protect your family from stress and unfair burdens. Our suite of wills, trusts, directives and power of attorney documents ensures that your financial and legal matters are handled to your wishes. Yes, it’s like a Sunday morning walk in the park.",
  suiteData: [
    {
      headingOne: "Will",
      textOne:
        "Your “will” is the highway to your legacy. Allowing you to create your last will and ensuring family and assets are protected— bequest personal assets, business assets, jewelry, art, automobiles, collectibles, etc.",
      imageOne: will,
      headingTwo: "Social Will",
      textTwo:
        "Your social life matters! Allowing you to create the last will for your social legacy. Enabling you to choose which sites and social media platforms you would like to have deleted, memorialized, or accessed upon your passing.",
      imageTwo: social,
    },
    {
      headingOne: "Crypto & NFT Will ™",
      textOne:
        "Swimming in Crypto & NFTs? Allowing you to create your will with digital inheritance technology for NFTs, Crypto, and Blockchain assets and enabling you to pass on these assets via smart contracts and blockchain technology.",
      imageOne: crypto,
      headingTwo: "HealthCare Directives",
      textTwo:
        "Your greatest wealth is your health. Allowing you to specify what actions should be taken for your health if you can no longer make decisions for yourself because of illness or incapacity.",
      imageTwo: health,
    },
    {
      headingOne: "Power of Attorney",
      textOne:
        "Empower your future and elect a power of attorney to best represent your wishes. Authorize and grant authority in understanding power of attorney to your POA to serve as the principal, grantor, or donor (of the power).",
      imageOne: power,
      headingTwo: "Trust Documents",
      textTwo:
        "What is more significant than having peace of mind? Allowing you to appoint a Fiduciary to execute and distribute the assets held in a Trust to your Beneficiaries once the Grantor dies.",
      imageTwo: trust,
    },
  ],
};

const quoteData = [
  {
    id: 1,
    text: "Legacy Suite will surely be the next must-have platform that everyone will no longer be able to live without. Truly genius.",
    author: "-Patty J-",
  },
  {
    id: 2,
    text: "My friend paid $800 to a lawyer to draft her will. I was able to create my will and so much more for a fraction of the time and the cost.",
    author: "-Margie W-",
  },
];

const howItWorksData = {
  headingOne: "Will",
  componentOne: "h2",
  textOne:
    "Create your will and invite your loved ones to be a part of your legacy.",
  headingTwo: "Social Will",
  componentTwo: "h2",

  textTwo:
    "Provide instructions on how your social media accounts will be managed or memorialized.",

  headingThree: "Crypto & NFT Will™",
  componentThree: "h2",
  textThree:
    "Create a digital will for Crypto & NFTs and automatically transfer them to your loved one’s beneficiary wallet via smart contracts.",
};
export default LegalSuite;
