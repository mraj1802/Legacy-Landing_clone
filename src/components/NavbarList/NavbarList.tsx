import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Box,
  Fade,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { INavbarProps } from "../../interfaces/components/Navbar/navbar";
import classes from "./NavbarList.module.css";

const NavbarList = ({ name, href = "", dark, navList }: INavbarProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // to keep the menu open for a while after moving focus away from the Nav Item
  const delayedOpenRef = React.useRef(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleMouseOver = () => {
    delayedOpenRef.current = false;
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  const handleMouseLeaveContainer = () => {
    delayedOpenRef.current = true;
    setTimeout(() => {
      if (delayedOpenRef.current) {
        delayedOpenRef.current = false;
        setOpen(false);
      }
    }, 90);
  };
  return (
    <Box>
      <li>
        <Box
          className={classes.container}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeaveContainer}
        >
          <Link href={href} passHref>
            <Typography
              variant="p"
              color={theme.palette.neutral.lighter}
              className={classes.name}
            >
              {name}
            </Typography>
          </Link>
          <Box color={theme.palette.neutral.lighter}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
        </Box>
      </li>
      <Fade in={open}>
        <Stack
          onMouseOver={handleMouseOver}
          style={{
            position: "absolute",
            pointerEvents: "auto",
          }}
        >
          <Paper
            sx={{
              minWidth: "256px",
              background: dark
                ? "#202021"
                : "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "8px",
              border: "1px solid rgba(176, 202, 238, 0.5)",
            }}
          >
            <Box onMouseLeave={handleMouseLeave}>
              <MenuList>
                {navList.map(({ name, url }, index) => (
                  <Link href={url} key={index}>
                    <Box>
                      <MenuItem
                        key={index}
                        sx={{
                          borderBottom:
                            index !== navList.length - 1
                              ? "1px solid rgba(176, 202, 238, 0.2)"
                              : "",
                        }}
                      >
                        <Typography
                          variant="p"
                          fontWeight={"600"}
                          color={theme.palette.neutral.lighter}
                          pt={"8px"}
                          pb={"8px"}
                          sx={{
                            "&:hover": {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {name}
                        </Typography>
                      </MenuItem>
                    </Box>
                  </Link>
                ))}
              </MenuList>
            </Box>
          </Paper>
        </Stack>
      </Fade>
    </Box>
  );
};

export default NavbarList;
