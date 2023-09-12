import { Box, Container, Typography, useTheme } from "@mui/material";
import DosAndDontsCard from "../../../components/DosAndDontsCard/DosAndDontsCard";
import donts from "./DontsData";
import classes from "./DosAndDonts.module.css";
import dos from "./DosData";

const DosAndDonts = () => {
  const theme = useTheme();
  return (
    <Container className={classes.root}>
      <Typography
        variant="h2"
        color={theme.palette.primary.dark}
        component="h2"
        mt="72px"
        textAlign={"center"}
        fontWeight="700"
      >
        Some Do&lsquo;s & Don&lsquo;t&lsquo;s
      </Typography>
      <Typography
        variant="body1"
        component="p"
        textAlign="center"
        className={classes.text}
      >
        This guide will help you begin the process of managing and settling your
        loved one&lsquo;s estate. This list is not exhaustive. You should refer
        to the probate laws of the state that the decedent died in or contact an
        attorney if you require additional assistance.
      </Typography>
      <Box className={classes.container}>
        <Box>
          <DosAndDontsCard {...dos} />
        </Box>
        <Box>
          <DosAndDontsCard {...donts} />
        </Box>
      </Box>
    </Container>
  );
};

export default DosAndDonts;
