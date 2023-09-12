import { Box, Typography, useTheme } from "@mui/material";
import Fade from "../../elements/Animation/Fade/Fade";
import { IHeadingTextShowcaseProps } from "../../interfaces/components/IHeadingTextShowcaseProps/headingTextShowcaseProps";
import classes from "./HeadingTextShowcase.module.css";

const HeadingTextShowcase = ({
  heading,
  text,
  maxWidth = "736px",
  backgroundColor,
  color,
}: IHeadingTextShowcaseProps) => {
  const theme = useTheme();
  return (
    <Box style={{ background: backgroundColor }}>
      <Box className={classes.root} sx={{ maxWidth: maxWidth }}>
        <Fade left={true}>
          <Typography
            variant="h2"
            fontWeight="700"
            color={color ? color : theme.palette.primary.dark}
          >
            {heading}
          </Typography>
        </Fade>
        <Fade>
          <Typography
            variant="body1"
            fontWeight={"500"}
            mt="22px"
            color={color ? color : theme.palette.primary.dark}
          >
            {text}
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default HeadingTextShowcase;
