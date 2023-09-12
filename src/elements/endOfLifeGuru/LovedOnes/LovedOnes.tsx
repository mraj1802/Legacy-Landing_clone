import { Box, Typography, useTheme } from "@mui/material";
import * as React from "react";
import classes from "./LovedOnes.module.css";

const LovedOnes = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Typography
        color={theme.palette.primary.dark}
        variant="h2"
        fontWeight="700"
        component="h3"
      >
        My loved one has died, where do I begin?
      </Typography>
      <br />
      <Typography
        color={theme.palette.primary.dark}
        variant="body1"
        component="p"
      >
        Don&lsquo;t feel overwhelmed. Each state has different rules when a
        person passes away. You should follow the laws of the state where the
        decedent lived.
        <br />
        <br />
        Before taking the following steps, you must first consider whether you
        are an “interested person” or named executor in the decedent&lsquo;s
        last will and testament (“will”). An interested person is one who has a
        direct financial interest in the outcome of a probate proceeding.
        Oftentimes, an interested person is an heir, legatee or devisee, spouse,
        or creditor of the decedent. If you are not an interested person or
        named executor, then it may not be in your best interest to go further
        with administering the decedent&lsquo;s estate without first consulting
        with an interested person or attorney.
      </Typography>
    </Box>
  );
};

export default LovedOnes;
