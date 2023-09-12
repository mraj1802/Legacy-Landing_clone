import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton/CustomButton";
import classes from "./LifeLine.module.css";
import lifeLine from "/public/crypto/lifeline.png";
const left = {
  heading: "Crypto Will ™",
  text: "Our technology is transparent and grants you complete control over who you want your crypto coins to be transferred to and how much you want to transfer, with the full capability of disbursing to multiple beneficiaries in one instant transaction.",
  type: "secondary",
};

const LifeLine = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container className={classes.root}>
        <Box>
          <Image src={lifeLine} alt="lifeline" />
        </Box>
        <Box className={classes.textContainer}>
          <Typography
            variant="h2"
            fontWeight="700"
            color={theme.palette.primary.dark}
          >
            Legacy Lifeline™
          </Typography>
          <Typography variant="p" mt="22px" color={theme.palette.primary.dark}>
            A backup wallet is associated with you only to help secure your
            crypto assets with just one click in case of any security
            compromise. All the assets, Crypto (ERC-20s) and NFTs (ERC-721s),
            will be transferred to your secure backup wallet. The wallet is
            created once you sign up, with your ownership.
          </Typography>
          <Box mt="32px" className={classes.btn}>
            <Link href="https://app.legacysuite.com/">
              <CustomButton variant="secondary">
                Engage your Legacy Lifeline™
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LifeLine;
