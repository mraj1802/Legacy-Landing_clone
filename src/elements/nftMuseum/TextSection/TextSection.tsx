import { Box, Container, Typography, useTheme } from "@mui/material";
import classes from "./TextSection.module.css";

const TextSection = () => {
  const theme = useTheme();
  return (
    <Box className={classes.container}>
      <Container className={classes.root}>
        <Typography
          variant="body1"
          color={theme.palette.neutral.light}
          fontWeight="400"
          component="p"
          className={classes.text}
        >
          A statue is a symbolic and artistic form of cementing a legacy. ETERN,
          by definition, means to make eternal or immortal. The Eternals Club is
          a collection of distinctive ETERN statues that reside on the Ethereum
          blockchain. Each ETERN is unique, based on 50 of well-designed
          elements that define an ETERN as an extremely rare character. The
          collection will be available on the Opensea marketplace. YOLO is the
          motto, You Organize &amp; Live On. Our ETERNS give you exclusive
          access and will be the key to unlock the secrets to cementing your
          Legacy through the use of the Legacy Suite platform.
        </Typography>
      </Container>
    </Box>
  );
};

export default TextSection;
