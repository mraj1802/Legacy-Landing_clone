import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./Drawer.module.css";
import envelope from "/public/icon/envelope.svg";
import video from "/public/icon/videocam.svg";

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
        <Link href="/">
          <Box p="30px">
            <CustomButton variant="primary" className={classes.btn}>
              Get Started
            </CustomButton>
          </Box>
        </Link>
        <List className={`${classes.drawer}`}>
          <ListItemButton
            sx={{
              borderBottom: "1px solid rgba(176, 202, 238, 0.4)",
              borderTop: "1px solid rgba(176, 202, 238, 0.4)",
            }}
          >
            <ListItemIcon>
              <Link href="/contact">
                <ListItemText
                  sx={{
                    color: "white",
                    ".MuiListItemText-primary": { color: "white" },
                  }}
                >
                  <Image
                    src={envelope}
                    alt="icon"
                    style={{ marginBottom: "-8px", marginRight: "10px" }}
                  />
                  Contact Us
                </ListItemText>
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            sx={{
              borderBottom: "1px solid rgba(176, 202, 238, 0.4)",
            }}
          >
            <ListItemIcon>
              <Link href="https://calendly.com/legacysuite">
                <ListItemText
                  sx={{
                    color: "white",
                    ".MuiListItemText-primary": { color: "white" },
                  }}
                >
                  <Image
                    src={video}
                    alt="icon"
                    style={{ marginBottom: "-8px", marginRight: "10px" }}
                  />
                  Book a Meeting
                </ListItemText>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        name="hamburger"
      >
        <MenuIcon style={{ color: "#fff" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
