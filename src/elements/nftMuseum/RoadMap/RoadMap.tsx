import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import classes from "./RoadMap.module.css";
import roadMapData from "./roadMapData";
import BackgorundFrameImage from "/public/nftMuseum/frame3.png";
import HeadImage from "/public/nftMuseum/head.png";
const RoadMap = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "10rem !important",
        mx: "auto !important",
        height: "710px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          display: "block",
          height: "100%",
          zIndex: "0",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "block",
            height: "100%",
            top: "45%",
          }}
        >
          <Image
            src={BackgorundFrameImage}
            alt="Backgroundframe"
            objectFit="contain"
            layout="intrinsic"
            objectPosition="bottom"
            width="1920"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          position: "relative",
          flex: 1,
          height: "100%",
          justifyContent: "flex-end",
          px: "2rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              zIndex: "0",
              justifyContent: "center",
              minHeight: "300px",
              top: "-17rem",
            }}
          >
            <Image
              src={HeadImage}
              objectFit="cover"
              layout="intrinsic"
              height="179"
              width="300"
              alt="image"
            />
          </Box>
        </Box>
        <Typography
          variant="h2"
          component="h1"
          color={theme.palette.neutral.lighter}
          fontSize="34px"
          className={classes.heading}
        >
          The Road Map
        </Typography>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            maxWidth: "700px",
            margin: "2rem auto",
          }}
        >
          <Box
            className={classes.line}
            sx={{
              height: "99%",
              position: "absolute",
              left: "50%",
              zIndex: "0",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "5rem",
            }}
          >
            {roadMapData.map(({ boldText, text }, index) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      flexDirection:
                        (index + 1) % 2 === 0 ? "row-reverse" : "row",
                    }}
                  >
                    <Box sx={{ flex: "1" }}></Box>
                    <Box
                      sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems:
                          index === roadMapData.length - 1 ? "flex-end" : null,
                      }}
                    >
                      <Box className={classes.circle}>
                        <Typography
                          variant="body1"
                          color={theme.palette.primary.dark}
                          component="p"
                        >
                          {`${index < 10 && "0"}${index + 1}`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flex: "1 ",
                        display: "flex",

                        justifyContent:
                          (index + 1) % 2 === 0 ? "flex-end" : "flex-start",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h4"
                          component="span"
                          color={theme.palette.neutral.lighter}
                          style={{
                            fontWeight: "800",
                            hyphens: "auto",
                            wordBreak: "break-word",
                          }}
                        >
                          {boldText}
                        </Typography>
                        <Typography
                          variant="body1"
                          component="span"
                          fontWeight="400"
                          color={theme.palette.neutral.lighter}
                        >
                          {text}
                        </Typography>
                      </div>
                      <br />
                    </Box>
                  </div>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoadMap;
