import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import FaqCard from "../../../components/FaqCard/FaqCard";
import Parallelogram from "../../../components/Parallelogram/Parallelogram";
import Fade from "../../Animation/Fade/Fade";
import classes from "./FAQsSecondary.module.css";
const FAQsSecondary = () => {
  return (
    <Box sx={{ backgroundColor: "#0b3167" }} className={classes.main}>
      <Container className={classes.container}>
        <Box>
          {/* If you want glossary section use this code */}
          {/* <Parallelogram>
            <Box className={classes.glossary}>
              <Typography variant="h2" color="neutral.lighter" fontWeight="700">
                Glossary
              </Typography>
              <Typography
                variant="body1"
                color="neutral.lighter"
                fontWeight="600"
                mt="22px"
              >
                The glossary provides an explanatory definition structure for
                all blockchain related functionalities you will experience on
                our platform.
              </Typography>
              <Box mt="32.5px" className={classes.btnContainer} mb="20px">
                <Box>
                  <Link href="/glossary">
                    <CustomButton
                      variant="secondary"
                      className={classes.buttonGlossary}
                    >
                      Glossary
                    </CustomButton>
                  </Link>
                </Box>
                <Box>
                  <Link href="/terms-of-use">
                    <CustomButton variant="primary" className={classes.button}>
                      Terms of Use
                    </CustomButton>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Parallelogram> */}
        </Box>
        <Box>
          <Typography
            component="h2"
            variant="h2"
            className={classes.heading}
            color={"neutral.lighter"}
            mt="40px"
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box className={classes.root}>
          {marketingFaqs.map(({ heading, texts, points }, index) => (
            <Fade left={index % 2 === 0 ? true : false} key={index}>
              <FaqCard
                index={index + 1}
                key={index + 1}
                heading={heading}
                points={points}
                texts={texts}
                secondary={true}
              />
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

interface Ifaqs {
  heading: string;
  texts: string[];
  points?: string[];
}

const marketingFaqs: Ifaqs[] = [
  {
    heading:
      "How does Legacy Suite help address and protect users with exchanges like FTX?",
    texts: [
      `Holding assets on a centralized exchange such as FTX has significant risks. Legacy Suite supports alternatives such as hot wallets and cold wallets by providing a one-click backup "panic" feature called LegacyLifeline. LegacyLifeline allows users to pre-authorize asset transfers on their non-custodial wallets and quickly execute smart contracts to avoid instances of digital items being held or frozen on exchanges. With this innovation, users can have peace of mind knowing that their assets are secure, even in a distressing situation such as a hack or security breach.`,
    ],
  },
  {
    heading: "Does Legacy Suite take custody or hold any of my Digital Assets?",
    texts: [
      `We get that question a lot, but we are happy to tell you that it’s YOUR wallet and YOUR assets. You have sole control over them. Our platform is developed using non-custodial digital asset technology, which means we do not take custody of your assets nor control of your private keys. Your assets always remain in control.`,
    ],
  },
  {
    heading:
      "Do you require my private keys or passphrase for NFT/Crypto Will™?",
    texts: [
      "No, we work with smart contracts that do not include us as a mediator entity. This works with your wallet address and the addresses of your loved ones. No passphrase or password is needed. When the time comes, your assets will only be claimed by your loved ones. Since the solution is entirely on chain, your assets will never be lost, even without Legacy Suite.",
    ],
  },
  {
    heading: "What are the security encryptions?",
    texts: [
      `We care about you, and we care about your security. For that reason, our code casters implemented encryption for every step of your suite life journey. The conversion of data from a readable format into an encoded format is what we call "encryption." Our code casters cast an impenetrable wall of security using 256-bit AES encryption out of 128-bit and 192-bit. 256-bit AES encryption is technically the most secure because of its crucial length size. Do you know? Based on estimation, 256-bit AES encryption can't be overkill because it would take trillions of years to crack using a brute-force attack.`,
    ],
  },
  {
    heading: "What happens to your cryptocurrency after you die?",
    texts: [
      "In 2021, the New York Times reported that around 20 percent of all 18.5M Bitcoin — valued at around $140 billion at the time— appeared to have been lost or in stranded wallets. This data was sourced from the cryptocurrency data firm Chainalysis. Therefore, you must make every effort to ensure this doesn't happen to you, and you properly plan for the transfer of these assets or sharing of private keys to protect these assets.",
    ],
  },
  {
    heading: "Can I leave Cryptocurrency and NFTs in a traditional will?",
    texts: [
      `To make sure your cryptocurrency and NFTs aren't lost or forever stranded in your wallet, you might consider outlining the details of your blockchain treasures in your will. However, traditional wills are not designed to hold private information and are typically public records once filed in probate court. So although a will won't necessarily be made public immediately, it's not a good idea to expose your private keys to your wallets.
      Leaving cryptocurrency and NFTs to your loved ones after your passing requires more planning than that traditional assets. Legacy Suite allows you to create a Crypto Will™️ and NFT Will™️ to leave a detailed guide on how to access your wallets and exchanges. These are not public legal documents; they remain private until your passing and are then shared as instructed to your Digital Executor™️.`,
    ],
  },
  {
    heading: "Does Legacy Suite provide legal advice?",
    texts: [
      "No, we are not attorneys and do not provide legal advice. We provide online estate planning resources which allow you to create wills and directives and centralize critical details which can be shared with your beneficiaries and executor pre- or post-death. As the legal and regulatory landscape steadily evolves around digital assets, we recommend that you consult with an attorney on all legal and tax implications to ensure that your planning process is up to date with the local governing body.",
    ],
  },
];

export default FAQsSecondary;
