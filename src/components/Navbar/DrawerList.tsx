import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Fade, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import classes from "./Drawer.module.css";
interface DrawerListData {
  name: string;
  link: string;
}
interface DrawerListNestedData {
  heading: string;
  data: Array<DrawerListData>;
}
const DrawerList = ({
  data,
  heading,
  nested = false,
  nestedData,
}: {
  data?: DrawerListData[];
  nestedData?: DrawerListNestedData[];
  heading: string;
  nested?: boolean;
}) => {
  const [state, setState] = React.useState(false);
  return (
    <Box
      style={{
        width: "100%",
        display: "block",
        borderBottom: "1px solid rgba(176, 202, 238, 0.4)",
        padding: "16px 8px",
      }}
    >
      <Box
        className={classes.drawerListContainer}
        onClick={() => {
          setState(!state);
        }}
      >
        <Box>
          <Typography variant="caption" color="neutral.lighter">
            {heading}
          </Typography>
        </Box>
        <Box sx={{ color: "white !important" }}>
          {state ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </Box>
      </Box>
      {nested ? (
        <>
          <Fade in={state}>
            <Box
              sx={{
                display: state ? "block" : "none",
              }}
            >
              {nestedData?.map(({ heading, data }, index) => (
                <Box key={index}>
                  <Typography
                    variant="caption"
                    color="secondary.main"
                    px="8px"
                    py="10px"
                  >
                    {heading}
                  </Typography>
                  {data!.map(({ name, link }, index) => {
                    return (
                      <Link href={link} key={index}>
                        <Typography
                          variant="caption"
                          color="neutral.lighter"
                          px="8px"
                          py="10px"
                        >
                          {name}
                        </Typography>
                      </Link>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </Fade>
        </>
      ) : (
        <>
          <Fade in={state}>
            <Box
              sx={{
                display: state ? "block" : "none",
              }}
            >
              {data!.map(({ name, link }, index) => {
                return (
                  <Link href={link} key={index}>
                    <Typography
                      variant="caption"
                      color="neutral.lighter"
                      px="8px"
                      py="10px"
                    >
                      {name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Fade>
        </>
      )}
    </Box>
  );
};

export default DrawerList;
