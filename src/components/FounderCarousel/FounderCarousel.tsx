import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import * as React from "react";
import classes from "./FounderCarousel.module.css";
import founderCarouselData from "./FounderCarouselData";
import FounderCarouselLeft from "./FounderCarouselLeft";
import FounderCarouselMiddle from "./FounderCarouselMiddle";

const FounderCarousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const theme = useTheme();
  const handleClickLeft = () => {
    setCurrentImage((prev) =>
      prev <= founderCarouselData.length - 1 && prev > 0 ? prev - 1 : prev
    );
  };
  const handleClickRight = () => {
    setCurrentImage((prev) =>
      prev < founderCarouselData.length - 1 && prev >= 0 ? prev + 1 : prev
    );
  };
  const activeButtonStyles = (boo: boolean, directionStyle: any) => {
    return true
      ? `${classes.carouselButton} ${classes.carouselButtonActive} ${directionStyle}`
      : `${classes.carouselButton} ${directionStyle}`;
  };
  const carouselStyle = (index: number) => {
    return index === currentImage
      ? ` ${classes.carouselContainer} ${classes.carouselSlideActive}`
      : classes.carouselContainer;
  };
  return (
    <Container>
      <Box className={classes.root} sx={{}}>
        <Box
          sx={{
            position: "relative !important",
            height: { xs: "100%", sm: "550px" },
            minHeight: "450px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {founderCarouselData.map(
            ({ carouselMiddleData, carouselLeftData, heading }, index) => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      height: "100%",
                      alignItems: "flex-end",
                      position: "relative",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                    className={carouselStyle(index)}
                    key={index}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        minHeight: "300px",
                      }}
                    >
                      <FounderCarouselLeft
                        data={carouselLeftData}
                        heading={heading}
                      />
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        background:
                          "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        minHeight: "400px",
                        borderRadius: "25px",
                      }}
                    >
                      <FounderCarouselMiddle
                        image={carouselMiddleData?.image}
                      />
                    </Box>
                  </Box>
                </>
              );
            }
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            py: "2rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <IconButton
              onClick={handleClickLeft}
              sx={{
                width: { xs: "32px", sm: "52px" },
                height: { xs: "32px", sm: "52px" },
                margin: "auto",
              }}
              disabled={currentImage === 0}
              className={activeButtonStyles(true, classes.carouselButtonLeft)}
            >
              <ChevronLeftRoundedIcon
                sx={{
                  fontSize: { xs: "16px", sm: "36px" },
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <IconButton
              onClick={handleClickRight}
              sx={{
                width: { xs: "32px", sm: "52px" },
                height: { xs: "32px", sm: "52px" },
                margin: "auto",
              }}
              className={activeButtonStyles(true, classes.carouselButtonRight)}
              disabled={currentImage === founderCarouselData.length - 1}
            >
              <ChevronRightRoundedIcon
                sx={{
                  fontSize: { xs: "16px", sm: "36px" },
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FounderCarousel;
