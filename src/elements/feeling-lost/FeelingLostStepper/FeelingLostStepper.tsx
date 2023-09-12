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
import Link from "next/link";
import * as React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { contentData } from "./feelingLostData";
import classes from "./FeelingLostStepper.module.css";

const FeelingLostStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.textContainer}>
          <Typography
            variant="h4"
            color={theme.palette.neutral.lighter}
            fontWeight="700"
          >
            Sorrow loos back. Worry looks around. Faith looks up. Lost looks
            found.
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.neutral.lighter}
            fontWeight="600"
            mt="22px"
            className={classes.heading}
          >
            Everything about your future legacy should not be ambiguously
            assumed. It is the meaning of your life. Be certain and seek
            clarity.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", padding: "50px 0px" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            alternativeLabel={true}
            sx={{ "	.MuiStepConnector-line": { color: "red !important" } }}
          >
            {steps.map((val, index) => (
              <Step key={index}>
                <StepButton
                  color="inherit"
                  onClick={handleStep(index)}
                  icon={
                    activeStep === index ? (
                      <RadioButtonCheckedIcon sx={{ color: "#28EAE9" }} />
                    ) : (
                      <CircleIcon sx={{ color: "white" }} />
                    )
                  }
                  sx={{
                    "& .Mui-active": {
                      color: "#28EAE9 !important",
                    },
                    "& .MuiStepLabel-root": {
                      "& .MuiStepLabel-label": {
                        color: "white",
                        fontWeight: "600",
                      },
                    },
                  }}
                >
                  {val.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Box className={classes.container}>{contentData()[activeStep]}</Box>
          <Box className={classes.ready}>
            <Typography
              variant="h1"
              color={theme.palette.neutral.lighter}
              fontWeight="700"
              mt="61px"
            >
              Are you Ready?
            </Typography>
            <Typography
              variant="h5"
              color={theme.palette.neutral.lighter}
              fontWeight="400"
              mt="22px"
            >
              Ensure your legacy is truly passed in accordance with owner&apos;s
              personal intent.
            </Typography>
            <Box mt="32px" pb="72px">
              <Link href="https://app.legacysuite.com">
                <CustomButton variant="primary">Let&lsquo;s Talk</CustomButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const steps = [
  {
    id: 1,
    label: "Probate Precis",
  },
  {
    id: 2,
    label: "Titling Personal Property",
  },
  {
    id: 3,
    label: "Titling Real Estate",
  },
];

export default FeelingLostStepper;
