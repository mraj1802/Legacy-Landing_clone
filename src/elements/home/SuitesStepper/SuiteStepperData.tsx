import { Typography } from "@mui/material";
import Image from "next/legacy/image";
import SuiteStepperCard from "../../../components/SuiteStepperCard/SuiteStepperCard";
import digital from "/public/landing/digital-suite.webp";
import financial from "/public/landing/financial-suite.webp";
import legacy from "/public/landing/legacy-suite.webp";
import suite from "/public/landing/suite.webp";

export const stepperData = (): any => {
  return [
    [
      <SuiteStepperCard
        heading="Legal Suite"
        text={
          <Typography
            component="p"
            variant="body1"
            color="palette.dark"
            fontWeight="500"
            mt="22px"
          >
            We provide first-class services in constructing your digital
            directives. We are dedicated to assisting you in creating crypto
            directives, NFT directives, social directives, healthcare
            directives, and power of attorney documents. In addition, we provide
            a vault where you can safely organize and manage your documents.
            <br />
            For us, your legacy is the law of the land.
          </Typography>
        }
        href="/legal-suite"
        key={1}
        image={
          <Image
            src={suite}
            alt="suite"
            style={{ marginTop: "19px" }}
            priority
          />
        }
      />,
    ],
    [
      <SuiteStepperCard
        heading="Digital Suite"
        text={
          <Typography
            component="p"
            variant="body1"
            color="palette.dark"
            fontWeight="500"
            mt="22px"
          >
            Streamline your digital asset workflow by allowing your heirs and
            loved ones the ability to manage your digital life. With Digital
            Suite, you can manage, create, and share data, digital vaults,
            passwords, store files and assign them all to digital executors and
            trusted contacts.
          </Typography>
        }
        href="/digital-suite"
        key={1}
        image={
          <Image
            src={digital}
            alt="suite"
            style={{ marginTop: "19px" }}
            priority
          />
        }
      />,
    ],
    [
      <SuiteStepperCard
        heading="Legacy Suite"
        text={
          <Typography
            component="p"
            variant="body1"
            color="palette.dark"
            fontWeight="500"
            mt="22px"
          >
            Shine a light on your legacy forever, guiding a path to memorialize
            your life’s journey. Extracting from the roots of your personal
            story and values, record your future messages and videos, document
            meaningful life events and achievements in your legacy journal,
            design an end-of-life plan, store and share your most cherished
            memories in your vault.
            <br /> Plant the seeds that will provide a shade of care for your
            loved ones for generations to come.
          </Typography>
        }
        key={1}
        href="/legacy-suite"
        image={<Image src={legacy} alt="suite" style={{ marginTop: "19px" }} />}
      />,
    ],
    [
      <SuiteStepperCard
        heading="Financial Suite"
        text={
          <Typography
            component="p"
            variant="body1"
            color="palette.dark"
            fontWeight="500"
            mt="15px"
          >
            Safeguarding your financial assets can mean a wide variety of
            things. With Financial Suite, adding, organizing, and assigning
            financial assets and liability accounts to beneficiaries is quick,
            easy, and painless. In addition, our intuitive display of net worth
            reporting, blockchain analytics, inventory of subscriptions, and
            financial reporting, gives you a comprehensive view of your
            financial life and makes the management process a bit easier.
            <br />
            Balancing your finance is the key to having enough, isn’t it?
          </Typography>
        }
        href="/financial-suite"
        key={1}
        image={
          <Image
            src={financial}
            alt="suite"
            style={{ marginTop: "19px" }}
            priority
          />
        }
        paddingTop="42px"
      />,
    ],
  ];
};
