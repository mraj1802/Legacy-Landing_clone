import { Box, Container, SxProps, Typography, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import Link from "next/link";
import * as React from "react";
import Fade from "../../elements/Animation/Fade/Fade";
import { NextImage } from "../../utils/image";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./Hero.module.css";
import bit from "/public/landing/bitcoin.svg";
import icon from "/public/landing/eth.svg";
import custodial from "/public/marketing/custodial.svg";

interface Hero {
  textMaxWidth?: any;
  landingButton?: boolean;
  imageStyles?: SxProps;
  heading: React.ReactNode;
  text: string | React.ReactNode;
  image: StaticImageData;
  btnText?: string;
  btnLink?: string;
  secondaryGradient?: boolean;
  height?: string;
  component?: string;
  contanierMargin?: string;
  forMarketing?: boolean;
  btnTwoText?: string;
  nonCustodialTag?: boolean;
  textVariant?: any;
}
const Hero = ({
  textMaxWidth = "620px",
  landingButton = false,
  imageStyles = {},
  heading,
  image,
  btnText,
  btnLink = "https://app.legacysuite.com/",
  text,
  height = "627px",
  secondaryGradient = false,
  contanierMargin = "",
  forMarketing = false,
  btnTwoText,
  component,
  nonCustodialTag = false,
  textVariant = "bodyBig",
}: Hero) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      className={
        secondaryGradient
          ? classes.bgSecondary
          : `${classes.bg} ${forMarketing && classes.bgImage}`
      }
      sx={{ height: height }}
    >
      <Container
        className={classes.container}
        sx={{ marginTop: contanierMargin }}
      >
        <Box sx={{ maxWidth: textMaxWidth }} className={classes.textContainer}>
          <Fade>{heading}</Fade>
          <Fade left={true}>
            <Typography
              variant={textVariant}
              color={theme.palette.neutral.lighter}
              fontWeight="500"
              mt={"32px"}
              component="h4"
            >
              {text}
            </Typography>
          </Fade>
          {/* Button only on landing page */}
          {landingButton && (
            <Box>
              <Box mt={"32px"} className={classes.btn}>
                <Box>
                  <Fade>
                    <Link href="/security">
                      <CustomButton
                        variant="primary"
                        style={{
                          padding: "0px 10px important",
                          position: "relative",
                          zIndex: "1000",
                          textTransform: "uppercase",
                        }}
                        className={classes.btnn}
                      >
                        <Box mt={1}>
                          <Image src={icon} alt="icon" />
                        </Box>
                        <Box ml={2}>Secure Your Digital Assets</Box>
                      </CustomButton>
                    </Link>
                  </Fade>
                </Box>
                <Box>
                  <Fade>
                    <Link href="/crypto">
                      <CustomButton
                        variant="outline"
                        sx={{
                          color: theme.palette.neutral.lighter,
                          border: "2px solid white",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                        className={classes.btnn}
                      >
                        <Box mt={1}>
                          <Image src={bit} alt="icon" />
                        </Box>
                        <Box ml={2}>Secure Your Crypto Assets</Box>
                      </CustomButton>
                    </Link>
                  </Fade>
                </Box>
              </Box>
              <Box sx={{ position: { lg: "relative" }, left: "-30px" }}>
                <Image src={custodial} alt="" />
              </Box>
            </Box>
          )}

          {!landingButton && (
            <Box className={classes.btn}>
              <Box mt="32px">
                <Link href={btnLink}>
                  <CustomButton variant="primary">{btnText}</CustomButton>
                </Link>
              </Box>
              {btnTwoText && (
                <Box mt="32px">
                  <Link href={btnLink}>
                    <CustomButton variant="outline">{btnTwoText}</CustomButton>
                  </Link>
                </Box>
              )}
            </Box>
          )}
          {nonCustodialTag && (
            <Box sx={{ position: { lg: "relative" }, left: "-30px" }}>
              <Image src={custodial} alt="" />
            </Box>
          )}
        </Box>
        <Box className={classes.image} sx={{ ...imageStyles }}>
          <NextImage
            src={image}
            alt="image"
            className={classes.img}
            priority
            quality={100}
          />
        </Box>
        <Box className={classes.responsiveImage}>
          <Image src={image} alt="image" priority quality={100} />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
