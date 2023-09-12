import { Box, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import classes from "./Video.module.css";
import { IVideoProps } from "../../interfaces/components/Video/video";

const Video = ({ playOnMobile, mobileVideoSrc, videoSrc }: IVideoProps) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component="div" className={classes.bgImage}>
      <Box
        style={{
          width: "100%",
          height: "0px",
          position: "relative",
          paddingBottom: "56.250%",
        }}
      >
        {playOnMobile ? (
          isMatch ? (
            <video
              autoPlay
              muted
              src={mobileVideoSrc && mobileVideoSrc}
              width="100%"
              height="100%"
              className="video"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></video>
          ) : (
            <iframe
              src={videoSrc}
              frameBorder="0"
              width="100%"
              height="100%"
              className="video"
              allow="autoplay"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          )
        ) : (
          <iframe
            src={videoSrc}
            frameBorder="0"
            width="100%"
            height="100%"
            className="video"
            allow="autoplay"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden",
            }}
          ></iframe>
        )}
      </Box>
    </Box>
  );
};

export default Video;
