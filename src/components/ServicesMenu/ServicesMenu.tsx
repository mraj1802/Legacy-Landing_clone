import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Box,
  Fade,
  MenuList,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { INavbarServices } from "../../interfaces/components/Navbar/navbar";
import MenuCard from "../MenuCard/MenuCard";
import NestedList from "../NestedList/NestedList";
import classes from "./ServicesMenu.module.css";

const ServicesMenu = ({ data }: { data: INavbarServices }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(-1);
  // to keep the menu open for a while after moving focus away from the Nav Item
  const delayedOpenRef = React.useRef(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const mouseEnter = (id: number, e: any) => {
    setState(id);
  };
  const mouseLeave = (id: number) => {};
  const handleMouseOver = () => {
    delayedOpenRef.current = false;
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setState(-1);
    setOpen(false);
  };
  function findById(data: any, givenId: number) {
    const elem = data.filter((data: any) => data.id === givenId);
    return elem;
  }
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
          <Typography
            variant="p"
            color={theme.palette.neutral.lighter}
            className={classes.name}
          >
            {data.name}
          </Typography>
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
          onMouseLeave={handleMouseLeave}
        >
          <Paper
            sx={{
              minWidth: "240px",
              background:
                "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "8px",
              border: "1px solid rgba(176, 202, 238, 0.5)",
            }}
          >
            <Box>
              <MenuList>
                {data.dropdown.map(({ name, id, url }, index) => (
                  <Link href={url ? url : "#"} key={index}>
                    <MenuCard
                      text={name}
                      mouseEnter={mouseEnter}
                      mouseLeave={mouseLeave}
                      state={state}
                      setState={setState}
                      id={id}
                      url={url}
                    />
                  </Link>
                ))}
              </MenuList>
            </Box>
          </Paper>
          <Box className={classes.sideMenuTwo}>
            {data.dropdown[1].id === state && (
              <Box>
                <NestedList
                  dropDown={data.dropdown[1].sideMenu!}
                  id={data.dropdown[1].id}
                />
              </Box>
            )}
          </Box>
        </Stack>
      </Fade>
    </Box>
  );
};

export default ServicesMenu;
