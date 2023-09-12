import { Box, Container, Typography, useTheme } from "@mui/material";
import TerritoryCard from "../../../components/TerritoryCard/TerritoryCard";
import classes from "./OurTerritory.module.css";
import twenty from "/public/icon/247.svg";
import bitcoin from "/public/icon/bitcoin.svg";
import lock from "/public/icon/lock.svg";

const OurTerritory = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.textContainer}>
          <Typography
            variant="h1"
            fontWeight="700"
            color={theme.palette.neutral.lighter}
          >
            Our Territory Traits
          </Typography>
          <Typography
            variant="body1"
            fontWeight="500"
            color={theme.palette.neutral.lighter}
            mt={"22px"}
          >
            We believe the only way to discover the limits of the possible is to
            go beyond and embrace the impossible. Don’t bound your legacy with
            limits.
          </Typography>
        </Box>
        <Box className={classes.cardContainer}>
          <TerritoryCard
            image={twenty}
            text="Ensure your digital life is managed according to your wishes."
            heading="Availability"
          />
          <TerritoryCard
            image={lock}
            heading="Security"
            text="Ensure your digital life is managed according to your wishes."
          />
          <TerritoryCard
            image={bitcoin}
            heading="Transferring"
            text="Ensure your digital life is managed according to your wishes."
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OurTerritory;
