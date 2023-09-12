import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import classes from "./LostForever.module.css";
import comma from "/public/feelingLost/comma.svg";
import inverted from "/public/feelingLost/inverted.svg";

const LostForever = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Box>
        <Image src={comma} alt="icon" />
      </Box>
      <br />
      <Typography
        color={theme.palette.primary.dark}
        variant="h3"
        fontWeight="700"
        component="h3"
      >
        Just because someone stumbles and loses their path, doesn&lsquo;t mean
        they&lsquo;re lost forever.
      </Typography>
      <br />
      <Typography
        color={theme.palette.primary.dark}
        variant="body1"
        component="p"
      >
        Feeling lost can be a good thing. It means you&lsquo;re realizing that
        you no longer want what you once did. It means that you&lsquo;re
        starting to change the way you think—and we believe that&lsquo;s a sign
        of growth, a revelation to your legacy!
        <br />
        <br />
        Dig in and enlighten your perspective before jumping off to any
        mysterious trail. Here you will find our expert reflections on policies
        and laws that will relieve any doubts and uncertainty.
      </Typography>
      <Box mt="20px">
        <Image src={inverted} alt="icon" />
      </Box>
    </Box>
  );
};

export default LostForever;
