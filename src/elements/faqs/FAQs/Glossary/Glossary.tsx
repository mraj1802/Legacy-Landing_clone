import { Box, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import classes from "./Glossary.module.css";

const Glossary = ({
  question,
  secondary = false,
}: {
  question?: boolean;
  secondary?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box className={secondary ? classes.secondaryRoot : classes.root}>
      <Container>
        <Typography
          variant="h2"
          fontWeight="700"
          textAlign={"center"}
          color={theme.palette.neutral.lighter}
        >
          {question ? "Still Have Questions?" : "Glossary"}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="600"
          color={theme.palette.neutral.lighter}
          mt="22px"
          textAlign={"center"}
        >
          {question
            ? "Can't find the answer you're looking for? Please chat to our friendly team."
            : "The glossary provides definitions for the end of life of your legacy."}
        </Typography>
        <Box mt={"32.5px"} className={classes.btn}>
          <Link href={question ? "https://app.legacysuite.com" : "glossary"}>
            <CustomButton variant="primary">
              {secondary ? "KNOW THE TERMS" : "Get in Touch"}
            </CustomButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Glossary;
