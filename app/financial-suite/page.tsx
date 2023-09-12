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
import suite from "/public/suites/financial-suite.png";
import assets from "/public/suites/financial/assets.svg";
import expense from "/public/suites/financial/expense.svg";
import finance from "/public/suites/financial/finance.svg";
import subscription from "/public/suites/financial/subscription.svg";

const style: SxProps = {
  marginTop: { md: "20px", sm: "80px", xs: "100px", lg: "-54px" },
  "@media (max-width: 572px)": {
    marginTop: "30px",
  },
};

const FinancialSuite = () => {
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
      <title>Manage Your Financial Assets in One Place | Legacy Suite</title>
      <meta
        name="description"
        content="Don't let weak passwords compromise your security. Learn best practices for storing passwords safely, from password managers to encryption techniques."
      />
      <meta
        name="keywords"
        content="Maintain a centralized view of your assets, liabilities, expenses, subscriptions, and beneficiaries. Safeguard your financial assets today."
      />
      <Navbar />
      <Hero
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "80px" } }}
            fontWeight="700"
          >
            FINANCIAL SUITE
          </Typography>
        }
        text={
          <span>
            Financial management is not merely about managing{" "}
            <span style={{ ...boldStyle }}>MONEY</span> but understanding the
            scope of your <span style={{ ...boldStyle }}>RESOURCES</span>.{" "}
            <br />
            Financial Suite lets you maintain a centralized view of your assets,
            liabilities, expenses, subscriptions, and beneficiaries in one
            place.
          </span>
        }
        landingButton={false}
        image={suite}
        imageStyles={{ ...style }}
        btnText="Let's Create"
      />
      <SecureByCarousel marginTop="200px !important" />
      <ChooseSuite {...financialSuiteData} />
      <HowItWorks
        heading="How It Works?"
        text="Safeguarding your financial assets means good stewardship for future generations."
        btnText="Get Started"
        {...howItWorksData}
      />
      <SuccessStory
        text={
          <span>
            According to a Capital One and The Decision Lab survey, 77% of
            Americans report feeling anxious about their financial situation.
            Financial Suite lets you view your Financial Report Card and always
            know your financial status and the impact on your legacy planning.
            Safeguard your financial assets today.
          </span>
        }
        numberOne="1000"
        numberTwo="4000"
        numberOneHeading={"Financial Reports"}
        numberTwoHeading={"Subscription Account"}
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
    text: "A lot of Bang for your Buck.",
    author: "-Christopher S-",
  },
  {
    id: 2,
    text: "An affordable and easy-to-use solution with excellent password security and good tech support.",
    author: "-Bishwjeet S-",
  },
  {
    id: 3,
    text: "Powerful application for managing enterprise passwords.",
    author: "-Said Y-",
  },
];

const financialSuiteData = {
  heading: "Why Choose Financial Suite?",
  text: "With Financial Suite, adding, organizing, and assigning financial assets and liability accounts to beneficiaries is quick, easy, and painless. In addition, our intuitive display of net worth reporting, allows you to maintain a centralized view of your assets, liabilities, expenses, subscriptions, and beneficiaries which gives you a comprehensive view of your financial life.",
  suiteData: [
    {
      headingOne: "Assets and Liabilities",
      textOne:
        "Here you can stay up to date with your net worth, organize your personal balance sheet, link all your assets & liabilities, provide instructions, log legacy contacts, designate & keep track of your beneficiaries for asset transfers.",
      imageOne: assets,
      headingTwo: "Expense Manager",
      textTwo:
        "Personal money manager for your financial assets where you can notify your family or loved ones about accounts to be closed, and debts to be settled.",
      imageTwo: expense,
    },
    {
      headingOne: "Subscription Manager",
      textOne:
        "You Subscribe, You Manage. Here you can record an inventory of subscriptions and provide access so heirs can terminate or assign as outlined in legal wills.",
      imageOne: subscription,
      headingTwo: "Financial Reports",
      textTwo:
        "Organize your financial life here. You can review a financial snapshot of your wealth any time, giving a helpful summary of your current financial status.",
      imageTwo: finance,
    },
  ],
};

const howItWorksData = {
  headingOne: "Asset Aggregation",
  componentOne: "h3",
  textOne:
    "Connect your accounts using PLAID and keep track of all your balances in one central location.",
  headingTwo: "Net Worth",
  componentTwo: "h3",
  textTwo:
    "Stay in tune with your personal balance sheet of assets and liabilities, and know your value at all times.",

  headingThree: "Expense Management",
  componentThree: "h3",
  textThree:
    "Keep your loved ones aware of expenses and subscriptions so they can manage accordingly if you are no longer here.",
};

export default FinancialSuite;
