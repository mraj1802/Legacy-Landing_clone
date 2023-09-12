import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, List, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./Drawer.module.css";
import DrawerList from "./DrawerList";
import { navbarServicesDrawer } from "./NavbarData";

interface Data {
  name: string;
  link: string;
}

const data: Data[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Security",
    link: "/security",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
];
interface DrawerListData {
  name: string;
  link: string;
}
const servicesData: DrawerListData[] = [
  {
    name: "Crypto & NFT Will",
    link: "/crypto",
  },
  {
    name: "LegacyPass™",
    link: "/legacy-pass",
  },
  {
    name: "Legacy Suite™",
    link: "/legacy-suite",
  },
  {
    name: "Digital Suite",
    link: "/digital-suite",
  },
  {
    name: "Financial Suite",
    link: "/financial-suite",
  },
  {
    name: "Legal Suite",
    link: "/legal-suite",
  },
];
const resourcesData: DrawerListData[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Claim Property",
    link: "/end-of-life-guru",
  },
  {
    name: "Nft Museum",
    link: "/nft-museum",
  },
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          display: "block !important",
          backdropFilter: "blur(10px)",
          ".MuiPaper-root": {
            background: "var(--primary-gradient)",
            width: "100%",
          },
        }}
      >
        <Box className={classes.logoContainer} p="10px">
          <Box>
            <Image
              src={"/short-logo.svg"}
              width="38"
              height="32"
              alt="logo"
              priority
            />
          </Box>
          <Box sx={{ padding: "6px 20px 10px 0px" }}>
            <CloseIcon
              style={{ color: "#fff" }}
              onClick={() => {
                setOpenDrawer(false);
              }}
            />
          </Box>
        </Box>
        <Link href="https://app.legacysuite.com">
          <Box p="30px">
            <CustomButton variant="primary" className={classes.btn}>
              Get Started
            </CustomButton>
          </Box>
        </Link>
        <List className={`${classes.drawer}`}>
          {data.map((data, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid rgba(176, 202, 238, 0.4)",
                padding: "16px 8px",
              }}
            >
              <Link href={data.link}>
                <Typography variant="caption" color="neutral.lighter">
                  {data.name}
                </Typography>
              </Link>
            </Box>
          ))}
          <DrawerList
            nestedData={navbarServicesDrawer}
            heading="Services"
            nested={true}
          />
          <DrawerList data={resourcesData} heading="Resources" />
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        name="hamburger"
        aria-label="MenuIcon"
      >
        <MenuIcon style={{ color: "#fff" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
