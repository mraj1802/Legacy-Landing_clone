import { Box } from "@mui/material";
import * as React from "react";
import classes from "./Parallelogram.module.css";

const Parallelogram = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Box className={`${classes.border} ${className}`}>
      <Box className={classes.borderReverse}>{children}</Box>
    </Box>
  );
};

export default Parallelogram;
