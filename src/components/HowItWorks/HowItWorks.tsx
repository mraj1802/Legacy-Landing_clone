import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IHowItWorksProps } from "../../interfaces/components/HowItWorks/howItWorks";
import CustomButton from "../CustomButton/CustomButton";
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";
import classes from "./HowItWorks.module.css";
import works from "/public/component/howItWork/works.svg";

const HowItWorks = ({
  heading,
  text,
  headingOne,
  headingTwo,
  headingThree,
  textOne,
  textTwo,
  textThree,
  btnText,
  componentOne = "h3",
  componentTwo = "h3",
  componentThree = "h3",
  btnLink = "https://app.legacysuite.com/",
}: IHowItWorksProps) => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.neutral.light} className={classes.root}>
      <Container>
        <Box className={classes.container}>
          <Box>
            <Typography
              variant="h2"
              fontWeight="700"
              component="h2"
              color={theme.palette.primary.dark}
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontWeight="500"
              color={theme.palette.primary.dark}
              mt={{ marginTop: "20px" }}
            >
              {text}
            </Typography>
            <Link href={btnLink}>
              <CustomButton
                sx={{ marginTop: "20px", position: "relative", zIndex: "1000" }}
                variant="secondary"
              >
                {btnText}
              </CustomButton>
            </Link>
          </Box>
        </Box>
        <Box className={classes.stepContainer}>
          <Box className={classes.image}>
            <Image src={works} alt="line" />
          </Box>
        </Box>
        <Box className={classes.steps}>
          <Box className={classes.stepOne}>
            <HowItWorksCard
              component={componentOne}
              heading={headingOne}
              text={textOne}
              number="01"
            />
          </Box>
          <Box className={classes.stepTwo}>
            <HowItWorksCard
              component={componentTwo}
              heading={headingTwo}
              text={textTwo}
              number="02"
            />
          </Box>
          <Box className={classes.stepThree}>
            <HowItWorksCard
              component={componentThree}
              heading={headingThree}
              text={textThree}
              number="03"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
