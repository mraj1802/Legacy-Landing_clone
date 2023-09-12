import { Box, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton/CustomButton";
import InvestmentProtectionCard from "../../../components/InvestmentProtectionCard/InvestmentProtectionCard";
import classes from "./InvestmentProtection.module.css";
import bitcoin from "/public/icon/bitcoin-a.svg";
import grow from "/public/icon/grow.svg";
import nft from "/public/icon/nft.svg";
const InvestmentProtection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ background: theme.palette.neutral.light }}
      className={classes.root}
    >
      <Container>
        <Box className={classes.textContainer}>
          <Typography
            variant="h2"
            pt="100px"
            component="h2"
            fontWeight={"700"}
            color={theme.palette.primary.dark}
          >
            Asset Protection
          </Typography>
          <Typography
            variant="body1"
            mt="22px"
            color={theme.palette.primary.dark}
            component="h4"
          >
            Ensure that your digital investments are secure and protected for
            future generations.
          </Typography>
          <Box mt={"32px"}>
            <Link href="https://app.legacysuite.com/">
              <CustomButton variant="secondary">Get Started</CustomButton>
            </Link>
          </Box>
        </Box>
        <Box className={classes.cardContainer}>
          <InvestmentProtectionCard
            image={bitcoin}
            heading="Crypto Will ™"
            text="Outlines how your Crypto assets should be distributed after passing."
          />
          <InvestmentProtectionCard
            image={nft}
            heading="NFT Will ™"
            text="Outlines how your NFTs should be distributed after passing."
          />
          <InvestmentProtectionCard
            image={grow}
            heading="Blockchain Analytics"
            text="Outlines valuable insights into your digital asset portfolio."
          />
        </Box>
      </Container>
    </Box>
  );
};

export default InvestmentProtection;
