import { Box, Container, SxProps, Typography, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useMarketingPageModal } from "../../../context/marketingModal";
import { NextImage } from "../../../utils/image";
import Fade from "../../Animation/Fade/Fade";
import classes from "./MarketingHero.module.css";
import custodial from "/public/marketing/custodial.svg";

interface IMarketingHero {
  textMaxWidth?: string;
  imageStyles?: SxProps;
  heading: React.ReactNode;
  text: string | React.ReactNode;
  image: StaticImageData;
  height?: string;
  contanierMargin?: string;
  btnText?: string;
  btnLink?: string;
}
const MarketingHero = ({
  textMaxWidth = "620px",
  imageStyles = {},
  heading,
  image,
  text,
  height = "627px",
  contanierMargin = "",
  btnText = "Get Started",
  btnLink = "https://app.legacysuite.com/",
}: IMarketingHero) => {
  const theme = useTheme();
  const { open, setOpen } = useMarketingPageModal();
  const pathname = usePathname();
  const handleClick = () => {
    // check if on influencer page then open modal
    if (pathname === "/VIP") {
      setOpen(true);
    }
  };
  return (
    <Box className={`${classes.bg} ${classes.bgImage}`} sx={{ height: height }}>
      <Container
        className={classes.container}
        sx={{ marginTop: contanierMargin }}
      >
        <Box sx={{ maxWidth: textMaxWidth }} className={classes.textContainer}>
          <Fade>{heading}</Fade>
          <Fade left={true}>
            <Typography
              variant="h3"
              color={theme.palette.neutral.lighter}
              fontWeight="700"
              mt={"23px"}
              component="p"
              textTransform="uppercase"
            >
              {text}
            </Typography>
            <Typography variant="h5" color="neutral.lighter" marginTop="32px">
              Start your 14-day Free Trial Now
            </Typography>
          </Fade>

          <Box className={classes.btn}>
            <Box mt="32px">
              <Link href={btnLink}>
                <Box onClick={handleClick}>
                  <CustomButton variant="primary" className={classes.button}>
                    {btnText}
                  </CustomButton>
                </Box>
              </Link>
            </Box>
            <Box className={classes.custodial}>
              <Image src={custodial} alt="" />
            </Box>
          </Box>
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

export default MarketingHero;
