import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import HowItWorksCard from "../../../components/HowItWorksCard/HowItWorksCard";
import { useMarketingPageModal } from "../../../context/marketingModal";
import { IHowItWorksSecondaryProps } from "../../../interfaces/components/HowItWorks/howItWorks";
import Fade from "../../Animation/Fade/Fade";
import classes from "./HowItWorksSecondary.module.css";
import works from "/public/component/howItWork/work.svg";
import worksWallet from "/public/component/howItWork/work-wallet.svg";

const HowItWorksSecondary = ({
  heading,
  text,
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  textOne,
  textTwo,
  textThree,
  textFour,
  btnText,
  secondary = false,
  forWallet = false,
  btnLink = "https://app.legacysuite.com/",
}: IHowItWorksSecondaryProps) => {
  const theme = useTheme();
  const { open, setOpen } = useMarketingPageModal();
  const pathname = usePathname();
  const handleClick = () => {
    // check if on influencer page then open modal
    if (pathname === "/VIP") {
      setOpen(true);
    }
  };
  return (
    <Box
      bgcolor={secondary ? "primary.darker" : forWallet ? "white" : "#0B3167"}
      className={classes.root}
    >
      <Container>
        <Box className={classes.container}>
          <Box>
            <Fade>
              <Typography
                variant="h2"
                fontWeight="700"
                component="h2"
                color={
                  forWallet
                    ? theme.palette.primary.dark
                    : theme.palette.neutral.lighter
                }
                className={classes.heading}
              >
                {heading}
              </Typography>
            </Fade>
            <Fade left={true}>
              <Typography
                variant="body1"
                component="p"
                fontWeight="500"
                color={
                  forWallet
                    ? theme.palette.primary.dark
                    : theme.palette.neutral.lighter
                }
                mt={{ marginTop: "20px" }}
              >
                {text}
              </Typography>
            </Fade>
            <Link href={btnLink}>
              <Box onClick={handleClick}>
                <CustomButton
                  sx={{
                    marginTop: "20px",
                    position: "relative",
                    zIndex: "1000",
                  }}
                  variant={forWallet ? "secondary" : "primary"}
                  className={classes.button}
                >
                  {btnText}
                </CustomButton>
              </Box>
            </Link>
          </Box>
        </Box>
        <Box className={classes.stepContainer}>
          <Box className={classes.image}>
            <Image src={forWallet ? worksWallet : works} alt="line" />
          </Box>
        </Box>
        <Box className={classes.steps}>
          <Box className={classes.stepOne}>
            <HowItWorksCard
              secondary={forWallet ? false : true}
              heading={headingOne}
              text={textOne}
              number="01"
              forWallet={forWallet}
            />
          </Box>
          <Box className={classes.stepTwo}>
            <HowItWorksCard
              secondary={forWallet ? false : true}
              heading={headingTwo}
              text={textTwo}
              forWallet={forWallet}
              number="02"
            />
          </Box>
          <Box className={classes.stepThree}>
            <HowItWorksCard
              secondary={forWallet ? false : true}
              heading={headingThree}
              text={textThree}
              forWallet={forWallet}
              number="03"
            />
          </Box>
          <Box className={classes.stepFour}>
            <HowItWorksCard
              secondary={forWallet ? false : true}
              forWallet={forWallet}
              heading={headingFour}
              text={textFour}
              number="04"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSecondary;
