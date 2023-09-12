import {
  Box,
  Collapse,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image, { StaticImageData } from "next/legacy/image";
import * as React from "react";
import classes from "./GuruSteps.module.css";
const RightImageStep = ({
  image,
  content,
  heading,
  minHeight = "400px",
  index,
  responsiveContent,
}: {
  image: StaticImageData;
  content: string;
  heading: string;
  minHeight: string;
  index: number;
  responsiveContent: string;
}) => {
  const [state, setState] = React.useState(true);
  const theme = useTheme();
  const watch = useMediaQuery("(max-width:1016px)");
  const handleClick = () => {
    setState(!state);
  };
  return (
    <Box
      className={classes.stepContainerRight}
      sx={{ borderLeft: watch ? "1px solid white" : "" }}
    >
      <Box
        className={classes.textContainerRight}
        sx={{
          minHeight: !watch ? minHeight : "",
          borderRight: !watch ? "1px solid white" : "",
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.neutral.lighter}
          className={classes.stepHeadingRight}
          component="h3"
        >
          {heading}
        </Typography>
        {/* Animation and Responsiveness */}
        {watch ? (
          <Collapse in={!state} collapsedSize="90px">
            <Typography
              variant="body1"
              component="p"
              sx={{
                whiteSpace: "normal",
                pr: "20px",
                overflow: "hidden",
              }}
              color={theme.palette.neutral.lighter}
              fontWeight="600"
              mt={2}
              className={classes.stepTextRight}
            >
              {watch ? (state ? responsiveContent : content) : content}
            </Typography>
          </Collapse>
        ) : (
          <Typography
            variant="body1"
            component="p"
            sx={{
              whiteSpace: "normal",
              pr: "20px",
              overflow: "hidden",
            }}
            color={theme.palette.neutral.lighter}
            fontWeight="600"
            mt={2}
            className={classes.stepTextRight}
          >
            {content}
          </Typography>
        )}

        {watch && (
          <Typography
            variant="h4"
            sx={{ whiteSpace: "normal" }}
            color={theme.palette.neutral.lighter}
            fontWeight="500"
            mt={2}
            className={classes.stepText}
            onClick={handleClick}
          >
            {state ? "Show More" : "Show Less"}
          </Typography>
        )}
      </Box>
      <Box>
        {!watch && (
          <Box className={classes.circleRight}>
            <Typography variant="h4" component="p">
              {index}
            </Typography>
          </Box>
        )}
      </Box>
      <Box>
        <Image src={image} alt="status" />
      </Box>
      {watch && (
        <Box sx={{ width: "100%" }}>
          <Box className={classes.circleResponsive}>
            <Typography variant="h4" component="p">
              {index}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RightImageStep;
