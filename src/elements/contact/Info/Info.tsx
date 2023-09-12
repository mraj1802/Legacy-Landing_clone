import { Box, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton/CustomButton";
import classes from "./Info.module.css";

const Info = () => {
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="body1"
          fontWeight="600"
          textAlign={"center"}
          color={theme.palette.neutral.lighter}
        >
          Don’t like forms?
        </Typography>
        <Typography
          variant="h2"
          fontWeight="700"
          textAlign={"center"}
          color={theme.palette.neutral.lighter}
          mt="15px"
        >
          info@legacysuite.com
        </Typography>
        <Typography
          variant="body1"
          fontWeight="600"
          color={theme.palette.neutral.lighter}
          mt="22px"
          textAlign={"center"}
        >
          You can always contact us above email address
        </Typography>
      </Container>
    </Box>
  );
};

export default Info;
