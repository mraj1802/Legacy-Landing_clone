import { Box, Container, Typography } from "@mui/material";
import FaqCard from "../../../components/FaqCard/FaqCard";
import Fade from "../../Animation/Fade/Fade";
import classes from "./FAQs.module.css";

const FAQs = ({ forMarketing = false }: { forMarketing?: boolean }) => {
  return (
    <Container className={classes.container}>
      <Box className={classes.text}>
        <Typography
          component="h2"
          variant="h2"
          className={classes.heading}
          color={"primary.dark"}
        >
          {forMarketing
            ? "Frequently Asked Questions"
            : "Questions to Consider"}
        </Typography>
      </Box>
      <Box className={classes.root}>
        {forMarketing
          ? marketingFaqs.map(({ heading, texts, points }, index) => (
              <Fade left={index % 2 === 0 ? true : false} key={index}>
                <FaqCard
                  index={index + 1}
                  key={index + 1}
                  heading={heading}
                  points={points}
                  texts={texts}
                />
              </Fade>
            ))
          : faqs.map(({ heading, texts, points }, index) => (
              <Fade left={index % 2 === 0 ? true : false} key={index}>
                <FaqCard
                  index={index + 1}
                  key={index + 1}
                  heading={heading}
                  points={points}
                  texts={texts}
                />
              </Fade>
            ))}
      </Box>
    </Container>
  );
};

export default FAQs;
interface Ifaqs {
  heading: string;
  texts: string[];
  points?: string[];
}

const marketingFaqs: Ifaqs[] = [
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
    heading: "What are the security encryptions?",
    texts: [
      `We care about you, and we care about your security. For that reason, our code casters implemented encryption for every step of your suite life journey. The conversion of data from a readable format into an encoded format is what we call "encryption." Our code casters cast an impenetrable wall of security using 256-bit AES encryption out of 128-bit and 192-bit. 256-bit AES encryption is technically the most secure because of its crucial length size. Do you know? Based on estimation, 256-bit AES encryption can’t be overkill because it would take trillions of years to crack using a brute-force attack.`,
    ],
  },
  {
    heading: "Does Legacy Suite provide legal advice?",
    texts: [
      "No, we are not attorneys and do not provide legal advice. We provide online estate planning resources which allow you to create wills and directives and centralize critical details which can be shared with your beneficiaries and executor pre- or post-death. As the legal and regulatory landscape steadily evolves around digital assets, we recommend that you consult with an attorney on all legal and tax implications to ensure that your planning process is up to date with the local governing body.",
    ],
  },
  {
    heading:
      "Do you require my wallet password or passphrase for NFT/Crypto Will™?",
    texts: [
      "No, we work with smart contracts that does not include us as a mediator entity. This works with your wallet address and addresses of your loved ones. No passphrase or password needed. When the time comes, your assets will be available to be claimed by your loved ones only. Since the solution is fully on chain, your assets will never be lost even without Legacy Suite.",
    ],
  },
  {
    heading: "What are the security encryptions?",
    texts: [
      `We care about you, and we care about your security. For that reason, our code casters implemented encryption for every step of your suite life journey. The conversion of data from a readable format into an encoded format is what we call "encryption." Our code casters cast an impenetrable wall of security using 256-bit AES encryption out of 128-bit and 192-bit. 256-bit AES encryption is technically the most secure because of its crucial length size. Do you know? Based on estimation, 256-bit AES encryption can’t be overkill because it would take trillions of years to crack using a brute-force attack.`,
    ],
  },
  {
    heading: "How do I stop my trial subscription?",
    texts: [
      "After logging into your Legacy Suite account, go to your account and click on a plan. Then click on a change plan and downgrade to the free plan. Confirm your downgrade. (Note: if you stop your free trial, you will not be able to restart it, and you will not be eligible for another free trial again.)",
    ],
  },
];

const faqs: Ifaqs[] = [
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
      "We get that question a lot, but we are happy to tell you that it’s YOUR wallet and YOUR assets. You have sole control over them. Our platform is developed using non-custodial digital asset technology, which means we do not take custody of your assets nor control of your private keys. Your assets always remain in control.",
    ],
  },
  {
    heading:
      "Do you require my wallet password or passphrase for NFT/Crypto Will™?",
    texts: [
      "No, we work with smart contracts that does not include us as a mediator entity. This works with your wallet address and addresses of your loved ones. No passphrase or password needed. When the time comes, your assets will be available to be claimed by your loved ones only. Since the solution is fully on chain, your assets will never be lost even without Legacy Suite.",
    ],
  },
  {
    heading: "What are the security encryptions?",
    texts: [
      `We care about you, and we care about your security. For that reason, our code casters implemented encryption for every step of your suite life journey. The conversion of data from a readable format into an encoded format is what we call "encryption." Our code casters cast an impenetrable wall of security using 256-bit AES encryption out of 128-bit and 192-bit. 256-bit AES encryption is technically the most secure because of its crucial length size. Do you know? Based on estimation, 256-bit AES encryption can’t be overkill because it would take trillions of years to crack using a brute-force attack.`,
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
  {
    heading: "What is a Digital Will™️?",
    texts: [
      `A traditional will is a legal document outlining how to distribute your estate when you die. Historically, those items in your estate typically included cash, real estate, investment assets, vehicles, etc. However, as our lives have transitioned online, electronic records, social accounts, and various digital accounts need to be accounted for. A Digital Will™️ helps determine the fate of a person's digital presence once they are deceased. Currently, most states don't formally recognize digital estate plans. Although a Digital Will™️ is not a legal document, it is an informal document that is meant to ensure your "digital assets" are addressed in the scope of your overall estate plan.`,
    ],
  },
  {
    heading: "What is a Digital Executor™️?",
    texts: [
      "A Digital Executor™️ is the individual which you have designated to manage your digital estate after your passing. The role of a Digital Executor™️ is to assist in addressing all of your digital assets, such as:",
    ],
    points: [
      "Cryptocurrency",
      "NFTs",
      "Social Media accounts",
      "Email accounts",
      "Phone and computers",
      "Domain names",
      "Paid accounts and subscriptions ",
      "Seller's accounts  ",
      "And so much more ",
    ],
  },
  {
    heading: "Why do I need Legacy Suite?",
    texts: [
      "In our modern world, many of us still function with archaic estate planning methods and fail to account for our digital assets. Traditional banking and estate planning methods maintain records by a centralized governing body, which typically includes ownership of accounts, titles, and deeds. However, digital assets such as Cryptocurrency and NFTs do not have a 'centralized' tracking system to maintain licenses, titles, and deeds. Legacy Suite seeks to modernize the Estate planning process with our patent-pending platform, which helps you keep your critical ledger of Crypto, NFTs, and all digital assets in one secure personal 'centralized' location. You also can share these vital details with whom you want and when you want. This helps ensure your assets are not lost or stranded and allows your heirs to have full knowledge of all your assets owned, where they are located and how they may access them when you depart from this world.",
    ],
  },
  {
    heading: "How do I stop my trial subscription?",
    texts: [
      "After logging into your Legacy Suite account, go to your account and click on a plan. Then click on a change plan and downgrade to the free plan. Confirm your downgrade. (Note: if you stop your free trial, you will not be able to restart it, and you will not be eligible for another free trial again.)",
    ],
  },
  {
    heading: "How do I unsubscribe from Legacy Suite emails?",
    texts: [
      "We apologize that our email content is not living up to your expectation. No longer wants to receive emails from us? Click here https://www.legacysuite.com",
    ],
  },
  {
    heading: "How do I delete my Legacy Suite Account?",
    texts: [
      "We apologize that we didn't live up to your expectation. After logging into your Legacy Suite account, go to your account and click on a plan. Then click on a change plan and downgrade to the free plan. Confirm your downgrade. (Note: if you stop your free trial, you will not be able to restart it, and you will not be eligible for another free trial again.)",
    ],
  },
];
