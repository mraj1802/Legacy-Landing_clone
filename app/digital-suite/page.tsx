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
import suite from "/public/suites/digital-suite.png";
import business from "/public/suites/digital/business.svg";
import digital from "/public/suites/digital/digital.svg";
import reporting from "/public/suites/digital/reporting.svg";
import share from "/public/suites/digital/share.svg";
import social from "/public/suites/digital/social.svg";
import vault from "/public/suites/digital/vault.svg";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-49px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const DigitalSuite = () => {
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
        Keeping your Digital Life ahead of the digital revolution | Legacy Suite
      </title>
      <meta
        name="title"
        content="Keeping your Digital Life ahead of the digital revolution | Legacy Suite"
      />
      <meta
        name="description"
        content="Ensure that your assets are distributed according to your wishes. Learn how to create an estate plan that covers your digital assets as well as physical ones."
      />
      <meta
        name="keywords"
        content="digital life,digital code vault,digital vault,digital will,manage social media accounts"
      />
      <Navbar />
      <Hero
        heading={
          <Typography
            variant="h1"
            component="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "80px" } }}
            fontWeight="700"
          >
            DIGITAL SUITE
          </Typography>
        }
        text={
          <span>
            Your loved ones should inherit
            <span style={{ ...boldStyle }}> ALL</span> your assets, including
            the
            <span style={{ ...boldStyle }}> DIGITAL</span> ones. Digital Suite
            enables you to share data and passwords, store files in vaults, and
            assign them all to digital executors and legacy contacts using
            blockchain technology.
          </span>
        }
        landingButton={false}
        image={suite}
        imageStyles={{ ...style }}
        btnText="Let's Create"
      />
      <SecureByCarousel marginTop="200px !important" />
      <ChooseSuite {...digitalSuiteData} />
      <HowItWorks
        heading="How It Works?"
        text="Keeping your digital life ahead of the digital revolution."
        btnText="Get Started"
        {...howItWorksData}
      />
      <SuccessStory
        text={
          <span>
            Lost Bitcoin stranded in wallets is estimated to be $140 billion.
            10-30 million users on Facebook are dead. <br /> Digital Suite
            provides a one-stop solution to address the conundrum when you
            introduce digital assets to the estate planning conversation.
          </span>
        }
        numberOne="10,000"
        numberOneHeading="Digital wills created"
        numberTwo="45,000"
        numberTwoHeading="Digital files and credentials shared"
      />
      <QuoteCarousel quoteData={quoteData} />
      <SymbolicAndArtistic />
      <Footer />
    </>
  );
};

const howItWorksData = {
  headingOne: "Digital Will™",
  componentOne: "h2",
  textOne:
    "Create a will for your digital assets and set it to initiate automatically.",
  headingTwo: "Digital Vault",
  componentTwo: "h2",
  textTwo:
    "Upload your critical documents to store and share in a secure environment.",
  headingThree: "Digital Sharing",
  componentThree: "h2",
  textThree:
    "Grant access to critical files and credentials to legacy contact and loved ones.",
};

const quoteData = [
  {
    id: 1,
    text: "You don’t know what you don’t know. How have we lived this long on planet earth without having something like this to help manage our digital lives and legacies? Truly revolutionary.",
    author: "-Sheila N-",
  },
  {
    id: 2,
    text: "You guys should be nominated for service of the year. Being able to provide my family with everything they need if anything were to happen to me gives me peace. My gratitude to the whole team @Legacysuite.",
    author: "-Michael H-",
  },
];

const digitalSuiteData = {
  heading: "Why Choose Digital Suite?",
  text: "Get your digital affairs in order for your loved ones before the “final order.” With Digital Suite, you can accelerate the inheritance timeline for your heirs, placing the transfer process of your Digital, Crypto, and NFT assets on autopilot. Create efficiencies to share critical documents and credentials, while allowing you to keep track of legacy contacts and beneficiaries assigned to your digital assets.",
  suiteData: [
    {
      headingOne: "Beneficiary Reporting",
      textOne:
        "It starts with trust and ends with trust. Allowing you to assign and keep track of legacy contacts and beneficiaries.",
      imageOne: reporting,
      headingTwo: "Business Succession",
      textTwo:
        "A leader's lasting value is measured by succession. Allowing you to add and share business agreements, ownership details, and succession protocols. ",
      imageTwo: business,
    },
    {
      headingOne: "Social Legacy",
      textOne:
        "Your Accounts, You Decide. Allowing you to add or nominate a caretaker to manage or delete your social media accounts and take control of your social legacy.",
      imageOne: social,
      headingTwo: "Digital Will™",
      textTwo:
        "Your digital footprint is your legacy. Allowing you to accelerate the inheritance timeline for heirs. Enabling asset transfer process on autopilot to securely pass on your Digital, Crypto, and NFT Assets.",
      imageTwo: digital,
    },
    {
      headingOne: "Critical Data Sharing",
      textOne:
        "Data is everywhere, but security isn’t. Allowing you to create efficiency in sharing critical documents and credentials in a secure environment. Enabling you to provide access to vital information to loved ones quickly without concern.",
      imageOne: share,
      headingTwo: "Digital Vault",
      textTwo:
        "If you want data to live on, carve it in stone. Allowing you to have a rock-solid encrypted vault where you can save or backup your most important digital files, and keep them within reach, even after you’re gone. Store and share identification documents, guardianship directives, family records, power of attorney documents, insurance policies, and so much more.",
      imageTwo: vault,
    },
  ],
};

export default DigitalSuite;
