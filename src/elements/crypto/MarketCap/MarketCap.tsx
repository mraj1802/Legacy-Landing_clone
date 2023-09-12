import { Box, Container, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getBitCoinData } from "../../../api/bitcoinData";
import classes from "./MarketCap.module.css";

const MarketCap = () => {
  const theme = useTheme();
  return (
    <Box className={classes.container}>
      <Container>
        <Box className={classes.root}>
          <Typography
            variant="body1"
            color="neutral.lighter"
            mt="10px"
            component="h2"
          >
            Current Crypto Market Cap
          </Typography>
          <Typography
            variant="h2"
            mt="22px"
            fontWeight="700"
            color="secondary.main"
            component="h2"
          >
            $890 Billion Dollars
          </Typography>
          <Typography variant="body1" mt="22px" color="neutral.lighter">
            Studies show 20% of this value, equal to $178 Billion, is assumed to
            be lost or stranded in wallets with no means to recover. We help you
            disburse multiple beneficiaries in your crypto will to solve this
            modern-day challenge, and preserve these digital assets.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketCap;
