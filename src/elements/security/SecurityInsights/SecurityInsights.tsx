import { Box, Container, Typography, useTheme } from "@mui/material";
import SecurityInsightsCard from "../../../components/SecurityInsightsCard/SecurityInsightsCard";
import Fade from "../../Animation/Fade/Fade";
import classes from "./SecurityInsights.module.css";
import { securityInsightsData } from "./securityInsightsData";

const SecurityInsights = () => {
  const theme = useTheme();
  return (
    <Box
      className={classes.root}
      sx={{ backgroundColor: theme.palette.neutral.light }}
    >
      <Container>
        <Box className={classes.container}>
          <Fade left={true}>
            <Typography
              variant="h2"
              fontWeight={"700"}
              component="h2"
              color={theme.palette.primary.dark}
            >
              Security Insights
            </Typography>
          </Fade>
          <Fade>
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight="600"
              component="p"
              mt="22px"
            >
              Whatever vision you have for your legacy, start leaving it now. We
              ensure your digital assets and memories are protected.
            </Typography>
          </Fade>
        </Box>
        <Box className={classes.stepContainer}>
          {securityInsightsData.map(({ image, heading, text }, index) => (
            <Box key={index}>
              <Fade left={index % 2 === 0 ? true : false}>
                <SecurityInsightsCard
                  image={image}
                  heading={heading}
                  text={text}
                />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SecurityInsights;
