import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import {
  Box,
  Container,
  Step,
  StepButton,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import Tag from "../../../components/Tag/Tag";
import Fade from "../../Animation/Fade/Fade";
import classes from "./SuitesStepper.module.css";
import { stepperData } from "./SuiteStepperData";

const steps = [
  {
    id: 0,
    label: "Legal Suite",
  },
  {
    id: 1,
    label: "Digital Suite",
  },
  {
    id: 2,
    label: "Legacy Suite",
  },
  {
    id: 3,
    label: "Financial Suite",
  },
];

const SuitesStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const clickNext = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      return;
    }
    setActiveStep(activeStep + 1);
  };
  const clickBack = () => {
    if (activeStep === 0) {
      setActiveStep(steps.length - 1);
      return;
    }
    setActiveStep(activeStep - 1);
  };
  return (
    <Box className={classes.root}>
      <Tag text="Inheritance Planning" />
      <Container>
        <Box className={classes.textContainer}>
          <Fade>
            <Typography
              variant="p"
              color={theme.palette.neutral.lighter}
              fontWeight="500"
              mt={"72px"}
            >
              A comprehensive suite of tools built on the blockchain that helps
              you plan for the future to ensure your assets are distributed
              according to your wishes and are protected for your loved ones.
              <br />
              Our easy-to-use platform allows you to create a crypto will,
              trusts, safeguard private keys, and wallet monitoring, all with a
              centralized asset hub to ensure your legacy is protected for
              generations.
            </Typography>
          </Fade>
        </Box>
        <Fade>
          <Box sx={{ width: "100%", padding: "50px 0px" }}>
            <Stepper
              nonLinear
              activeStep={activeStep}
              alternativeLabel={true}
              sx={{ ".MuiStepConnector-line": { color: "red !important" } }}
            >
              {steps.map((val, index) => (
                <Step key={index}>
                  <StepButton
                    color="inherit"
                    onClick={handleStep(index)}
                    icon={
                      activeStep === index ? (
                        <RadioButtonCheckedIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      ) : (
                        <CircleIcon sx={{ color: "white" }} />
                      )
                    }
                    sx={{
                      "& .Mui-active": {
                        color: `${theme.palette.secondary.main} !important`,
                      },
                      "& .MuiStepLabel-root": {
                        "& .MuiStepLabel-label": {
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                          "@media (max-width: 500px)": {
                            fontSize: "16px",
                            fontWeight: "500",
                          },
                        },
                      },
                    }}
                  >
                    {val.label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <Box className={classes.container}>{stepperData()[activeStep]}</Box>
            <Box className={classes.arrows}>
              <Box className={classes.icon} onClick={clickBack}>
                <ArrowBackIcon />
              </Box>
              <Box className={classes.icon} onClick={clickNext}>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default SuitesStepper;
