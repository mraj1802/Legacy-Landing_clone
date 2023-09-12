import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useMarketingPageModal } from "../../context/marketingModal";
import DrawerComp from "./Drawer";
import classes from "./MarketingNavbar.module.css";
import envelope from "/public/icon/envelope.svg";
import video from "/public/icon/videocam.svg";
import logoWhite from "/public/logo/logo-white-color.png";

const MarketingNavbar = () => {
  const pathname = usePathname();
  const [influencer, setInfluencer] = React.useState(false);
  const { open, setOpen } = useMarketingPageModal();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [changeBackground, setChangeBackground] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (pathname === "/VIP") {
      setInfluencer(true);
    }
    function changeBackgroundNavbar() {
      if (window.scrollY >= 80) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    }
    changeBackgroundNavbar();
    window.addEventListener("scroll", changeBackgroundNavbar, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", changeBackgroundNavbar);
  }, []);
  return (
    <Box
      className={`header ${
        !changeBackground
          ? classes.mainContainer
          : `${classes.backgroundFilter} ${classes.mainContainer}`
      }`}
    >
      <Container>
        {isMatch ? (
          <Box className={classes.responsiveContainer}>
            <Box className={classes.image} mt="5px">
              <Link href="/" passHref>
                <Image
                  src={logoWhite}
                  alt="logo"
                  className={classes.img}
                  width={200}
                  height={30}
                />
              </Link>
            </Box>
            <Box>
              <DrawerComp />
            </Box>
          </Box>
        ) : (
          <Box component="div" className={classes.nav}>
            <Box className={classes.logo}>
              <Link href="/">
                <Image src={logoWhite} alt="logo" />
              </Link>
            </Box>
            <Box>
              <ul className={classes.list}>
                <Box>
                  <li>
                    <Link href="/contact">
                      <Typography
                        variant="p"
                        color={theme.palette.neutral.lighter}
                        className={
                          pathname === "/contact"
                            ? `${classes.border}`
                            : `${classes.paragraph}`
                        }
                        mt="5px"
                      >
                        <Image
                          src={envelope}
                          alt="icon"
                          style={{ marginRight: "10px" }}
                        />
                        Contact Us
                      </Typography>
                    </Link>
                  </li>
                </Box>
                <Box>
                  <li>
                    <Link href="https://calendly.com/legacysuite">
                      <Typography
                        variant="p"
                        color={theme.palette.neutral.lighter}
                        className={
                          pathname === "/contact"
                            ? `${classes.border}`
                            : `${classes.paragraph}`
                        }
                        mt="5px"
                      >
                        <Image
                          src={video}
                          alt="icon"
                          style={{ marginRight: "10px" }}
                        />
                        Book a Meeting
                      </Typography>
                    </Link>
                  </li>
                </Box>
              </ul>
            </Box>
            <Box>
              {influencer ? (
                <Box>
                  <Button
                    onClick={handleClick}
                    variant="primary"
                    sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                    className={classes.button}
                  >
                    Early Access
                  </Button>
                </Box>
              ) : (
                <Box>
                  <a href="https://app.legacysuite.com">
                    <Button
                      variant="primary"
                      sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      className={classes.button}
                    >
                      Get Started
                    </Button>
                  </a>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default MarketingNavbar;
