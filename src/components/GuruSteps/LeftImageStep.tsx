import {
  Box,
  Collapse,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import * as React from "react";
import classes from "./GuruSteps.module.css";
const LeftImageStep = ({
  image,
  heading,
  content,
  note,
  width,
  minHeight = "400px",
  index,
  responsiveContent,
}: {
  image: StaticImageData;
  heading: string;
  content: string;
  note?: boolean;
  width: string;
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
      className={classes.stepContainer}
      sx={{ borderLeft: watch ? "1px solid white" : "" }}
    >
      {watch && (
        <Box sx={{ width: "100%" }}>
          <Box className={classes.circleResponsive}>
            <Typography variant="h4" component="p">
              {index}
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          width: !watch ? width : "auto",
        }}
      >
        <Image src={image} alt="status" />
      </Box>
      <Box>
        {!watch && (
          <Box className={classes.circle}>
            <Typography variant="h4" component="p">
              {index}
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        className={classes.textContainer}
        sx={{
          minHeight: minHeight,
          borderLeft: !watch ? "1px solid white" : "",
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.neutral.lighter}
          className={classes.stepHeading}
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
              sx={{ whiteSpace: "normal" }}
              color={theme.palette.neutral.lighter}
              fontWeight="600"
              mt={2}
              className={classes.stepText}
            >
              {watch ? (state ? responsiveContent : content) : content}
            </Typography>
          </Collapse>
        ) : (
          <Typography
            variant="body1"
            component="p"
            sx={{ whiteSpace: "normal" }}
            color={theme.palette.neutral.lighter}
            fontWeight="600"
            mt={2}
            className={classes.stepText}
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
        {note && (
          <Box className={classes.note} sx={{ backgroundColor: "#0C408859" }}>
            <Typography
              variant="body1"
              color={theme.palette.neutral.lighter}
              fontWeight="700"
            >
              Note
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ whiteSpace: "normal" }}
              color={theme.palette.neutral.lighter}
              fontWeight="600"
              mt={2}
            >
              The keyword is original will. Many states will only accept the
              original form of the will because, without it, the court may
              assume that the original will was destroyed or revoked. If you
              cannot locate the original will but can locate copies of the
              original will, some states will allow copies to be admitted in
              court. You should contact an attorney if you can only locate a
              copy of a will.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LeftImageStep;
