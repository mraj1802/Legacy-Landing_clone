import { Box, Button, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { ISuiteStepperCardProps } from "../../interfaces/components/SuiteStepperCard/suiteStepperCard";
import classes from "./SuiteStepperCard.module.css";

const SuiteStepperCard = ({
  href = "#",
  heading,
  text,
  image,
  imageMarginTop = "20px",
  paddingTop = "72px",
}: ISuiteStepperCardProps) => {
  const theme = useTheme();

  return (
    <Box
      className={classes.root}
      sx={{ backgroundColor: theme.palette.neutral.lighter }}
    >
      <Box className={classes.textContainer} sx={{ paddingTop: paddingTop }}>
        <Typography
          variant="h3"
          color={theme.palette.primary.dark}
          fontWeight="700"
          component="h2"
        >
          {heading}
        </Typography>

        {typeof text === "string" ? (
          <>
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight="500"
              mt="22px"
              component="p"
            >
              {text}
            </Typography>
          </>
        ) : (
          <>{text}</>
        )}
        <Box mt="32px">
          <Link href={href}>
            <Button variant="secondary">Learn More</Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.light,
        }}
        className={classes.image}
      >
        <Box
          sx={{ marginTop: imageMarginTop }}
          className={classes.imageContainer}
        >
          {image}
        </Box>
      </Box>
    </Box>
  );
};

export default SuiteStepperCard;
