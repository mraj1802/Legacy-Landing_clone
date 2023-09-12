import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import classes from "./WeSupport.module.css";
import metamask from "/public/marketing/metamask.svg";
import walletConnect from "/public/marketing/walletConnect.svg";
import trustWallet from "/public/marketing/trustWallet.svg";
import coinbase from "/public/marketing/coinbase.svg";
import ledger from "/public/marketing/ledger.svg";
import trezor from "/public/marketing/trezor.svg";
import ellipal from "/public/marketing/ellipal.svg";
import binance from "/public/marketing/binance.svg";
import Parallelogram from "../../../components/Parallelogram/Parallelogram";
import Fade from "../../Animation/Fade/Fade";

const WeSupport = () => {
  return (
    <Box
      className={classes.root}
      sx={{ backgroundColor: "#0B3167", paddingBottom: "72px" }}
    >
      <Container>
        <Fade left={true}>
          <Typography
            variant="h2"
            fontWeight="700"
            color="neutral.lighter"
            textAlign="center"
            pt="62px"
          >
            What we Support?
          </Typography>
        </Fade>
        <Typography
          variant="h3"
          fontWeight="700"
          color="neutral.lighter"
          textAlign="center"
          pt="32px"
        >
          Hot Wallets
        </Typography>
        <Parallelogram className={classes.largeSectionContainer}>
          <Box className={classes.largeSection}>
            <Box>
              <Image src={metamask} alt="" />
            </Box>
            <Box>
              <Image src={walletConnect} alt="" />
            </Box>
            <Box>
              <Image src={trustWallet} alt="" />
            </Box>
            <Box>
              <Image src={coinbase} alt="" />
            </Box>
          </Box>
        </Parallelogram>
        <section className={classes.section}>
          <Box>
            <Typography
              variant="h3"
              mb="30px"
              color="neutral.lighter"
              textAlign="center"
              fontWeight="700"
            >
              Cold Wallets
            </Typography>
            <Parallelogram>
              <Box className={classes.wallets}>
                <Box>
                  <Image src={ledger} alt="" />
                </Box>
                <Box>
                  <Image src={trezor} alt="" />
                </Box>
                <Box>
                  <Image src={ellipal} alt="" />
                </Box>
              </Box>
            </Parallelogram>
          </Box>
          <Box>
            <Typography
              variant="h3"
              mb="30px"
              color="neutral.lighter"
              fontWeight="700"
              textAlign="center"
            >
              Exchanges
            </Typography>
            <Parallelogram>
              <Box className={classes.exchanges}>
                <Box>
                  <Image src={binance} alt="" />
                </Box>
                <Box>
                  <Image src={coinbase} alt="" />
                </Box>
              </Box>
            </Parallelogram>
          </Box>
        </section>
      </Container>
    </Box>
  );
};

export default WeSupport;
