import { Box, Typography, useTheme } from "@mui/material";
import { IHowItWorksCardProps } from "../../interfaces/components/HowItWorksCard/howItWorksCard";
import classes from "./HowItWorksCard.module.css";

const HowItWorksCard = ({
  number,
  heading,
  text,
  secondary = false,
  component = "h3",
  forWallet = true,
}: IHowItWorksCardProps) => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Box
        className={
          secondary
            ? classes.numberSecondary
            : forWallet
            ? classes.numberWallets
            : classes.number
        }
      >
        <Typography
          variant="h2"
          color={
            forWallet
              ? theme.palette.secondary.main
              : theme.palette.primary.dark
          }
          fontWeight="700"
        >
          {number}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color={
          secondary
            ? theme.palette.neutral.lighter
            : forWallet
            ? theme.palette.primary.dark
            : theme.palette.primary.dark
        }
        component={component!}
        sx={{ marginBottom: "12px" }}
        fontWeight="700"
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="400"
        color={
          secondary
            ? theme.palette.neutral.lighter
            : forWallet
            ? theme.palette.primary.dark
            : theme.palette.primary.dark
        }
        component="p"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default HowItWorksCard;
