import { Box, Container } from "@mui/material";
import * as React from "react";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import Tag from "../../../components/Tag/Tag";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./WalletProtection.module.css";
import monitoring from "/public/landing/monitoring.svg";
import emergncy from "/public/landing/emergency.svg";
import will from "/public/landing/will.png";

const WalletMonitoring = {
  heading: "Wallet Monitoring",
  text: "Our service utilizes advanced technology to monitor your wallet and alert you in real time when suspicious activity is detected. We help you stay informed about your wallet's activity, so you can rest assured that your crypto wallets are always securely monitored and well-protected.",
  type: "secondary",
};
const WalletEmergency = {
  heading: "Emergency Wallet",
  text: "Our secure and intuitive LegacyLifeline™ tool provides protection in the event that your wallet has been compromised or your private keys have been lost. Users can rest assured that assets are safe and accessible in the event of an emergency, allowing you to quickly and securely transfer your digital assets to your backup wallet with just one click of a button.",
  type: "secondary",
};
const cryptoWill = {
  heading: "Crypto Will™",
  text: "Our platform provides a secure and straightforward way to transfer your crypto assets toyour chosen heirs upon death, ensuring that your digital legacy is secure and your lovedones are taken care of. With our battle-tested smart contract technology, you can easily select your digital assets, designate beneficiaries, and automatically transfer assets after death without the need to share private keys.",
  type: "secondary",
};
const WalletProtection = () => {
  return (
    <Box className={classes.root}>
      <Tag text="Wallet Protection" />
      <Container className={classes.container}>
        <Box>
          <TextContainerImageShowcase
            right={
              <HeadingTextButttonShowcase
                maxWidth="600px"
                button={false}
                {...WalletMonitoring}
              />
            }
            left={<ImageShowcase src={monitoring} />}
            reverse={true}
          />
        </Box>
        <Box>
          <TextContainerImageShowcase
            left={
              <HeadingTextButttonShowcase
                maxWidth="600px"
                button={false}
                {...WalletEmergency}
              />
            }
            right={<ImageShowcase src={emergncy} />}
          />
        </Box>
        <Box>
          <TextContainerImageShowcase
            right={
              <HeadingTextButttonShowcase
                maxWidth="600px"
                button={false}
                {...cryptoWill}
              />
            }
            left={<ImageShowcase src={will} />}
            reverse={true}
            gap="30px"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WalletProtection;
