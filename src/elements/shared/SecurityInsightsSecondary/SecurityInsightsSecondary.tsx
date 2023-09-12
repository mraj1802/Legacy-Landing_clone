import { Box, Container, Typography, useTheme } from "@mui/material";
import SecurityInsightsCard from "../../../components/SecurityInsightsCard/SecurityInsightsCard";
import Tag from "../../../components/Tag/Tag";
import Fade from "../../Animation/Fade/Fade";
import classes from "./SecurityInsightsSecondary.module.css";
import { securityInsightsData } from "./SecurityInsightsSecondaryData";

const SecurityInsightsSecondary = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root} sx={{ backgroundColor: "primary.darker" }}>
      <Tag text="Security Insights" />
      <Container>
        <Box className={classes.container}>
          <Fade>
            <Typography
              variant="body1"
              color={theme.palette.neutral.lighter}
              fontWeight="600"
              component="p"
              m="auto"
              mt="22px"
              maxWidth="736px"
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
                  secondary={true}
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

export default SecurityInsightsSecondary;
