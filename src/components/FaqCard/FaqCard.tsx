import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, Collapse, Typography, useTheme } from "@mui/material";
import * as React from "react";
import minus from "/public/marketing/minus.svg";
import plus from "/public/marketing/plus.svg";

import Image from "next/image";
import classes from "./FaqCard.module.css";
const FaqCard = ({
  heading,
  texts,
  points,
  index,
  secondary = false,
}: {
  heading: string;
  texts: string[];
  points?: string[];
  index?: number;
  secondary?: boolean;
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const theme = useTheme();
  const openDrawer = () => {
    setShowDetail(!showDetail);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.detail}>
          {showDetail ? (
            <>
              {!secondary ? (
                <RemoveOutlinedIcon
                  className={classes.icon}
                  onClick={openDrawer}
                />
              ) : (
                <Box onClick={openDrawer} sx={{ cursor: "pointer" }}>
                  <Image src={minus} alt="" />
                </Box>
              )}
            </>
          ) : (
            <>
              {!secondary ? (
                <AddOutlinedIcon
                  className={classes.icon}
                  onClick={openDrawer}
                />
              ) : (
                <Box onClick={openDrawer} sx={{ cursor: "pointer" }}>
                  <Image src={plus} alt="" />
                </Box>
              )}
            </>
          )}
          <Typography
            variant="h3"
            fontWeight={secondary ? "400" : "700"}
            className={classes.heading}
            color={
              secondary
                ? theme.palette.neutral.lighter
                : theme.palette.primary.dark
            }
            lineHeight="30px"
          >
            {heading}
          </Typography>
        </Box>
        <Collapse in={showDetail}>
          <Box className={classes.textBox}>
            {texts.map((text, index) => (
              <Typography
                key={index + 1}
                component="p"
                variant="body1"
                fontWeight="600"
                color={
                  secondary
                    ? theme.palette.neutral.lighter
                    : theme.palette.primary.dark
                }
              >
                {text}
              </Typography>
            ))}
            {points && (
              <Box className={classes.points}>
                {points.map((point, index) => (
                  <Typography
                    key={index + 1}
                    variant="body1"
                    fontWeight="600"
                    color={
                      secondary
                        ? theme.palette.neutral.lighter
                        : theme.palette.primary.dark
                    }
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default FaqCard;
