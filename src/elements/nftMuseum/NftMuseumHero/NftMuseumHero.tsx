import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import CustomButton from "../../../components/CustomButton/CustomButton";
import classes from "./NftMuseumHero.module.css";
import starsImage from "/public/nftMuseum/stars-background.png";
import textImage from "/public/nftMuseum/text.png";

const NftMuseumHero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "650px",
        width: "100%",
        paddingTop: "100px",
        paddingBottom: "1rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", height: "100%", position: "absolute" }}>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              display: "block",
              height: "100%",
            }}
          >
            <Image
              src={starsImage}
              objectFit="cover"
              layout="fill"
              alt="image"
            />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          <Image src={textImage} alt="text" />
        </Box>
        <Typography
          variant="h5"
          component="p"
          color={theme.palette.neutral.light}
          textAlign="center"
          mt={4}
        >
          Live Life. Live Long. Live On.
        </Typography>
        <Box className={classes.btnContainer}>
          <a href="https://app.legacysuite.com">
            <Button
              style={{
                whiteSpace: "nowrap",
                maxWidth: "192px",
                textTransform: "uppercase",
                border: "2px solid white",
              }}
              variant="primary"
            >
              Mint Now
            </Button>
          </a>
          <a href="https://app.legacysuite.com">
            <CustomButton
              variant="outline"
              style={{
                textTransform: "uppercase",
              }}
            >
              CREATE ACCOUNT
            </CustomButton>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default NftMuseumHero;
