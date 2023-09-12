import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import classes from "./SecureByCarousel.module.css";

const SecureByCarousel = ({
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
        backgroundColor: "white",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            whiteSpace: "normal",
          }}
          color={theme.palette.primary.dark}
          fontWeight="700"
          component="h2"
          className={classes.heading}
        >
          Media Mentions
        </Typography>
      </Box>
      <Box className={classes.slider}>
        <Box className={classes.slideTrack}>
          <Box className={classes.slide}>
            <Image
              src="/landing/ap.svg"
              height="80"
              width="150"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/market-watch.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/boston.svg"
              height="100"
              width="150"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/fintech.svg"
              height="100"
              width="250"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/cbs.svg"
              height="100"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/yahoo.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/benzinga.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/morningstar.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/nbc.svg"
              height="80"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/digital.svg"
              height="100"
              width="250"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/fox.svg"
              height="100"
              width="130"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/insider.svg"
              height="100"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/herald.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/abc.svg"
              height="80"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/times.svg"
              height="100"
              width="300"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/ap.svg"
              height="80"
              width="150"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/market-watch.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/boston.svg"
              height="100"
              width="150"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/fintech.svg"
              height="100"
              width="250"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/cbs.svg"
              height="100"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/yahoo.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/benzinga.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/morningstar.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/nbc.svg"
              height="80"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/digital.svg"
              height="100"
              width="250"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/fox.svg"
              height="100"
              width="130"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/insider.svg"
              height="100"
              width="180"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/herald.svg"
              height="100"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/abc.svg"
              height="80"
              width="200"
              alt=""
              priority
            />
          </Box>
          <Box className={classes.slide}>
            <Image
              src="/landing/times.svg"
              height="100"
              width="300"
              alt=""
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecureByCarousel;
