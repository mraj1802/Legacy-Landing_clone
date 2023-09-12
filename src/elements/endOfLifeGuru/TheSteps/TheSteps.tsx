import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton/CustomButton";
import LeftImageStep from "../../../components/GuruSteps/LeftImageStep";
import RightImageStep from "../../../components/GuruSteps/RightImageStep";
import classes from "./TheSteps.module.css";
import steps from "./theStepsData";

const TheSteps = () => {
  const theme = useTheme();
  const watch = useMediaQuery("(max-width:1016px)");
  return (
    <Box
      sx={{
        paddingLeft: watch ? "20px" : "inherit",
      }}
      className={classes.root}
    >
      <Container>
        <Box className={classes.text}></Box>
        <Typography
          variant="h2"
          color={theme.palette.neutral.lighter}
          className={classes.heading}
          component="h2"
          fontWeight="700"
        >
          The Steps
        </Typography>
        {steps.map(
          (
            {
              image,
              heading,
              content,
              width,
              note,
              minHeight,
              responsiveContent,
            },
            index
          ) => {
            if ((index + 1) % 2 === 0) {
              return (
                <>
                  <RightImageStep
                    heading={heading}
                    content={content}
                    image={image}
                    minHeight={minHeight}
                    index={index + 1}
                    responsiveContent={responsiveContent}
                  />
                </>
              );
            } else {
              return (
                <>
                  <LeftImageStep
                    image={image}
                    heading={heading}
                    content={content}
                    width={width!}
                    note={note ? note : false}
                    minHeight={minHeight}
                    index={index + 1}
                    responsiveContent={responsiveContent}
                  />
                </>
              );
            }
          }
        )}
        <Typography
          variant="h2"
          component="h2"
          color={theme.palette.neutral.lighter}
          textAlign="center"
          fontWeight="700"
          mt="100px"
        >
          Are you ready?
        </Typography>
        <Typography
          variant="body1"
          fontWeight="600"
          mt="22px"
          component="p"
          color={theme.palette.neutral.lighter}
          textAlign="center"
          sx={{ whiteSpace: "normal" }}
        >
          Ensure your legacy is truly passed in accordance with the owner’s
          personal intent.
        </Typography>
        <Box className={classes.btnContainer}>
          <Link href="https://app.legacysuite.com/">
            <Box>
              <CustomButton
                variant="primary"
                sx={{ border: "2px solid white" }}
              >
                Build Your Legacy
              </CustomButton>
            </Box>
          </Link>
          <Box>
            <Link href="https://app.legacysuite.com/">
              <CustomButton variant="outline" sx={{ marginLeft: "12px" }}>
                Claim Assets
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TheSteps;
