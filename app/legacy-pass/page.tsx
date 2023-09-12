"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import HowItWorks from "../../src/components/HowItWorks/HowItWorks";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import ChooseSuite from "../../src/elements/suites/ChooseSuite/ChooseSuite";
import SuccessStory from "../../src/elements/suites/SuccessStory/SuccessStory";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";
import pass from "/public/suites/legacy-pass.png";
import access from "/public/suites/legacyPass/access.svg";
import aes from "/public/suites/legacyPass/aes.svg";
import blockchain from "/public/suites/legacyPass/blockchain.svg";
import decentralize from "/public/suites/legacyPass/decentralize.svg";
import decryption from "/public/suites/legacyPass/decryption.svg";
import ecies from "/public/suites/legacyPass/ecies.svg";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-30px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const LegacyPass = () => {
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
      <title>
        Built on the blockchain, our platform enables you to secure your
        physical and digital assets, create a crypto will, safeguard critical
        passwords and more.
      </title>
      <meta
        name="description"
        content="Protect your digital assets with advanced password protection and maximize the security of your cryptocurrencies and nft."
      />
      <meta
        name="keywords"
        content="Safeguard and encrypt your passwords in our fortified blockchain vault and access them with just one click from any device."
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
            LegacyPass<span style={{ ...boldStyle }}>™</span>
          </Typography>
        }
        text="Intuitive password management to simplify your life. LegacyPass™ enables you to Save, Sort, and Share passwords with loved ones and Legacy Contacts for various accounts using this solution."
        btnText="Let's Create"
        landingButton={false}
        image={pass}
        imageStyles={{ ...style }}
      />
      <SecureByCarousel marginTop="200px !important" />
      <ChooseSuite {...legacyPassData} />
      <HowItWorks
        heading="How It Works?"
        text="Your passwords are the keys to unlocking your digital life. LegacyPass™  is 
        designed in blockchain technology to provide privacy, security, and ease of 
        use."
        btnText="Get Started"
        {...howItWorksData}
      />
      <SuccessStory
        text="The average person has 100 passwords.
        800,000 password breaches occur per
        year alone in USA. About 446.5 million
        records exposed in 2018.
        Legacypass™ started with a brick of trust
        and now the wall speaks for itself."
        numberOne="2 Years"
        numberOneHeading="Zero Breaches"
        numberTwo="25000"
        numberTwoHeading="Legacypass™ users"
      />
      <SymbolicAndArtistic
        heading="Get started now"
        text="We help you organize, create and secure important information and preserve your digital life."
        btnText="CREATE ACCOUNT"
      />
      <Footer />
    </>
  );
};

const legacyPassData = {
  heading: "Why Choose LegacyPass™?",
  headingType: "h4",
  text: "Your data – is YOUR data. Keep your passwords in our fortified blockchain vault and access them with one click from all your devices. Yes, it’s a password manager, but with LegacyPass™, you can radically simplify your digital life.",
  suiteData: [
    {
      headingOne: "Access on the Go",
      textOne:
        "Conveniently access, manage, or share your passwords from desktop or mobile, LegacyPassTM was designed from the ground up to address your needs.",
      imageOne: access,
      headingTwo: "ECIES",
      textTwo:
        "Elliptic Curve Integrated Encryption Scheme combines ECC-based asymmetric cryptography with symmetric ciphers to provide data encryption. We are enabling smaller key sizes, reducing storage and transmission requirements.",
      imageTwo: ecies,
    },
    {
      headingOne: "Blockchain",
      textOne:
        "A password alone can no longer meet our security needs. Using blockchain in the backend makes it seamless and enables a password-less environment. Experience a more robust and protected domain when you are online.",
      imageOne: blockchain,
      headingTwo: "AES256 Encryption",
      textTwo:
        "Scramble your password, so it's so unreadable or unusable by hackers. Enable extra layers of protection when you zoom across the internet, making it the most powerful encryption standard by miles.",
      imageTwo: aes,
    },
    {
      headingOne: "Decentralized",
      textOne:
        "Eliminate password sharing with network services and empower decentralized blockchain digital identities to remove exposures of sensitive data and tracking of your activity.",
      imageOne: decentralize,
      headingTwo: "Decryption",
      textTwo:
        "A knock out to rule all malicious activities. A private key to decrypt your passwords which makes it even stronger than any other password managers in the market.",
      imageTwo: decryption,
    },
  ],
};

const howItWorksData = {
  headingOne: "Digital Vault",
  componentOne: "h3",
  textOne:
    "Create encrypted passwords to secure your digital assets. Access them anywhere you want.",
  headingTwo: "Legal Vault",
  componentTwo: "h3",

  textTwo:
    "Add your critical documents to enable encrypted security on each file you add.",

  headingThree: "Legacy Vault",
  componentThree: "h3",
  textThree:
    "Add photos and videos in encrypted manner so you can only access them with Legacypass™.",
};
export default LegacyPass;
