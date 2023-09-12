import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import classes from "./SecureByCarouselSecondary.module.css";

const SecureByCarouselSecondary = ({
  margin = false,
  marginTop = "2px !important",
}: {
  margin?: boolean;
  marginTop?: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      className={classes.root}
      sx={{
        backgroundColor: "#062044",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            whiteSpace: "normal",
          }}
          color={theme.palette.neutral.lighter}
          fontWeight="700"
          component="h2"
          className={classes.heading}
        >
          Secured By
        </Typography>
      </Box>
      <Box className={classes.slider}>
        <Box className={classes.slideTrack}>
          <Box className={classes.slide}>
            <Image
              src="/suite/metamask-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/web3-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/stripe-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/sendgrid-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/twilio-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/plaid-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/metamask-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/web3-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/stripe-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/sendgrid-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/twilio-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/suite/plaid-s.svg"
              height="100"
              width="150"
              alt=""
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecureByCarouselSecondary;
