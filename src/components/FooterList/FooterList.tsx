import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Collapse, Link, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { IFooterProps } from "../../interfaces/components/Footer/footer";
import classes from "./FooterList.module.css";

const FooterList = ({
  heading,
  text,
  nestedRoute,
  nested,
  forServices = false,
  link = "#",
}: IFooterProps) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {nested ? (
        <Box>
          <Box className={classes.headingContainer} onClick={handleOpen}>
            <Typography
              color={"neutral.lighter"}
              variant="body1"
              fontWeight="700"
              component="p"
              className={classes.heading}
            >
              {heading}
            </Typography>
            <Box sx={{ color: theme.palette.info.main }}>
              {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
            </Box>
          </Box>
          <Box className={`${!open && classes.hide}`}>
            <Collapse in={open}>
              {nestedRoute!.map(({ heading, text }, index) => (
                <Box key={index}>
                  <Typography
                    color="secondary.main"
                    variant="body1"
                    fontWeight="700"
                    component="p"
                    className={classes.heading}
                    pt="20px"
                  >
                    {heading}
                  </Typography>
                  {text!.map(({ text, link }, index) => (
                    <Link href={link} key={index}>
                      <Typography
                        color="neutral.lighter"
                        variant="p"
                        fontWeight="500"
                        component="p"
                        pt="20px"
                        pl="10px"
                      >
                        {text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              ))}
            </Collapse>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box className={classes.headingContainer} onClick={handleOpen}>
            <Typography
              color={forServices ? "secondary.main" : "neutral.lighter"}
              variant="body1"
              fontWeight="700"
              component="p"
              className={classes.heading}
            >
              {heading}
            </Typography>
            <Box sx={{ color: theme.palette.info.main }}>
              {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
            </Box>
          </Box>
          <Box className={`${!open && classes.hide}`}>
            <Collapse in={open}>
              {text!.map(({ text, link }, index) => (
                <Link href={link} key={index}>
                  <Typography
                    color="neutral.lighter"
                    variant="p"
                    fontWeight="500"
                    component="p"
                    p={1}
                  >
                    {text}
                  </Typography>
                </Link>
              ))}
            </Collapse>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FooterList;
