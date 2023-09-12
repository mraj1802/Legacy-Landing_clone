import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import classes from "./TheVision.module.css";
import face from "/public/nftMuseum/face.png";
import frameBackground from "/public/nftMuseum/frame1.png";

const TheVision = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxHeight: "1000px",
        }}
      >
        <Box
          sx={{ position: "absolute", width: "100%", height: "80%", bottom: 0 }}
        >
          <Image
            src={frameBackground}
            objectFit="fill"
            layout="fill"
            alt="background"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 4,
            flexDirection: { xs: "column", sm: "row" },
            position: "relative",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              color={theme.palette.neutral.lighter}
              component="h1"
              className={classes.heading}
              fontWeight="700"
            >
              The Vision
            </Typography>
            <Typography
              variant="h3"
              component="h4"
              className={classes.text}
              color={theme.palette.secondary.main}
              mt={3}
            >
              WHAT YOU DO IN LIFE,
              <br /> WILL BIRTH A LEGACY THEREAFTER
            </Typography>
            <Typography
              variant="h5"
              mt={3}
              component="p"
              fontWeight="400"
              color={theme.palette.neutral.lighter}
            >
              Creating a never-ending phenomenon that loops in your loved ones
              and makes a trail for them to follow. Preserving what you believed
              in and lived for, makes you existence an inspiration for the
              generations to come. It’s not just your legacy, it’s their
              history. Our brand is built on preserving your personal story,
              your values and your legacy.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              position: "relative",
            }}
          >
            <Image
              src={face}
              alt="face"
              layout="intrinsic"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TheVision;
