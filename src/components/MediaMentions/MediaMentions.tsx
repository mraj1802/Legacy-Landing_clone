import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import Fade from "../../elements/Animation/Fade/Fade";
import classes from "./MediaMentions.module.css";

const MediaMentions = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Fade left={true}>
        <Typography
          variant="h2"
          textAlign="center"
          color={theme.palette.primary.dark}
          fontWeight="700"
        >
          Secured By
        </Typography>
      </Fade>
      <Container>
        <Box className={classes.container}>
          <Image
            src={"/suite/web3auth.svg"}
            width={233}
            height={42}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
          <Image
            src={"/suite/metamask.svg"}
            width={229}
            height={42}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />

          <Image
            src={"/suite/send-grid.svg"}
            width={192}
            height={42}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
        </Box>
        <Box className={classes.container}>
          <Image
            src={"/suite/plaid.svg"}
            width={138}
            height={52}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
          <Image
            src={"/suite/twilio.svg"}
            width={139}
            height={42}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
          <Image
            src={"/suite/aws.svg"}
            width={112}
            height={52}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
          <Image
            src={"/suite/stripe.svg"}
            width={120}
            height={42}
            objectFit="contain"
            alt="icon"
            loading="lazy"
          />
          {/* <Link href="https://www.bloomberg.com/press-releases/2022-11-29/legacy-suite-legacy-suite-receives-certik-audit-certification-of-its-smart-contract-for-digital-asset-inheritance-system">
            <Image
              src={"/featured/berg.svg"}
              width={160}
              height={120}
              objectFit="contain"
              alt="icon"
              loading="lazy"
            />
          </Link> */}
        </Box>
      </Container>
    </Box>
  );
};

export default MediaMentions;
