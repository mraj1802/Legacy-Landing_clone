import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import NavbarList from "../NavbarList/NavbarList";
import ServicesMenu from "../ServicesMenu/ServicesMenu";
import DrawerComp from "./Drawer";
import classes from "./Navbar.module.css";
import { navbarResources, navbarServices } from "./NavbarData";
import logoWhite from "/public/logo/logo-white-color.png";

const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [changeBackground, setChangeBackground] = React.useState(false);

  React.useEffect(() => {
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
            <Box className={classes.image}>
              <Link href="/" passHref>
                <Image
                  src="/logo/logo-white-color.png"
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
                  <ServicesMenu data={navbarServices} />
                </Box>
                <Box>
                  <li>
                    <Link href="/security">
                      <Typography
                        variant="p"
                        color={theme.palette.neutral.lighter}
                        className={
                          pathname === "/about"
                            ? `${classes.border}`
                            : `${classes.paragraph}`
                        }
                      >
                        Security
                      </Typography>
                    </Link>
                  </li>
                </Box>
                <Box>
                  <NavbarList
                    name="Resources"
                    href="#"
                    navList={navbarResources}
                  />
                </Box>
                <Box>
                  <li>
                    <Link href="/pricing">
                      <Typography
                        variant="p"
                        color={theme.palette.neutral.lighter}
                        className={
                          pathname === "/pricing"
                            ? `${classes.border}`
                            : `${classes.paragraph}`
                        }
                      >
                        Pricing
                      </Typography>
                    </Link>
                  </li>
                </Box>
              </ul>
            </Box>
            <Box>
              <Box>
                <a href="https://app.legacysuite.com">
                  <Button
                    variant="primary"
                    sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                  >
                    GET STARTED
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
