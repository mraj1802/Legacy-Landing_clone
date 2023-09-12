"use client";
import { SxProps, Typography, useTheme } from "@mui/material";
import Footer from "../../src/components/Footer/Footer";
import Hero from "../../src/components/Hero/Hero";
import Navbar from "../../src/components/Navbar/Navbar";
import SecureByCarousel from "../../src/components/SecureByCarousel/SecureByCarousel";
import WeSupport from "../../src/elements/marketing/WeSupport/WeSupport";
import WalletCardContainer from "../../src/elements/wallets/WalletCardContainer/WalletCardContainer";
import WhyWallets from "../../src/elements/wallets/WhyWallets/WhyWallets";
import alert from "/public/wallets/alert.svg";
import connect from "/public/wallets/connect.svg";
import emergency from "/public/wallets/emergency.svg";
import eye from "/public/wallets/eye.png";
import mobile from "/public/wallets/mobile.png";
import security from "/public/wallets/security.svg";
import tech from "/public/wallets/tech.svg";
import transfer from "/public/wallets/transfer.svg";
import wallet from "/public/wallets/wallet-protection.png";

const Page = () => {
  const theme = useTheme();
  const style: SxProps = {
    marginTop: { lg: "-240px", md: "-240px" },
    "@media (max-width: 572px)": {
      marginTop: "30px",
    },
  };
  return (
    <div>
      <title>Wallet Protection</title>
      <Navbar />
      <Hero
        heading={
          <Typography
            variant="h1"
            color={theme.palette.secondary.main}
            sx={{ marginTop: { lg: "10px", md: "-10px" } }}
            fontWeight="700"
            component="h1"
          >
            WALLET PROTECTION
          </Typography>
        }
        text={
          <span>
            Our wallet monitoring and backup services are designed to ensure the
            safety and security of your crypto assets against cyber hacks, while
            also enabling you to immediately respond to any suspicious activity.
            Quickly transfer your assets to a backup wallet in case of any
            security breaches or loss of private keys.
          </span>
        }
        btnText="GET STARTED"
        btnLink="https://app.legacysuite.com"
        landingButton={false}
        image={wallet}
        imageStyles={{ ...style }}
        textMaxWidth={{ lg: "500px", md: "400px" }}
        textVariant="h5"
        secondaryGradient={true}
        nonCustodialTag={true}
        height="640px"
      />
      <SecureByCarousel />
      <WhyWallets
        text="Our monitoring service informs and protects you against hacks, theft, and other cyber threats that may compromise your crypto currency assets. By keeping you up-to-date on your wallet's activity and alerting you of any suspicious transactions, we enable you to take immediate action to safeguard your assets."
        heading="Why Wallet Monitoring?"
        image={eye}
        padding={"50px"}
      />
      <WalletCardContainer data={cardDataOne} />
      <WhyWallets
        heading="Emergency Backup Wallet"
        text="Our emergency backup wallet provides a secure, convenient, and hassle-free solution in case of security breaches or loss of private keys. Because of blockchain’s secure nature, if you lose private keys, you lose your wallet. Enable your ultimate backup plan today."
        image={mobile}
        padding="20px 0px 0px 0px"
      />
      <WalletCardContainer data={cardDataTwo} />

      <WeSupport />
      <Footer />
    </div>
  );
};

const cardDataOne = [
  {
    image: connect,
    heading: "Connectivity",
    text: "Connect multiple crypto wallets to our platform and receive notifications for every single transaction.",
  },
  {
    image: tech,
    heading: "Technology",
    text: "Blockchain technology crawls your wallets for any suspicious activity and alerts you in real-time.",
  },
  {
    image: alert,
    heading: "Instant Alerts",
    text: "Stay informed on all transactions with instant alerts, allowing you to quickly take action & prevent any potential losses.",
  },
];
const cardDataTwo = [
  {
    image: emergency,
    heading: "Emergency",
    text: "In case of a security breach or loss of private keys, trigger your emergency wallet to instantly backup your assets.",
  },
  {
    image: transfer,
    heading: "Transfer",
    text: "With just one click, your assets are transferred to a backup wallet, ensuring they remain safe and accessible.",
  },
  {
    image: security,
    heading: "Security",
    text: "Our blockchain mechanism protects your assets during transfer, safeguarding them from potential threats.",
  },
];

export default Page;
